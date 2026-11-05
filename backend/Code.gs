/**
 * Orbion Prep School: form backend (Google Apps Script web app).
 * Runs as the school owner's Google account. Handles:
 *   - enquiry   -> Google Sheet row + alert email to owner (no email to the parent)
 *   - visit     -> Sheet row + Google Calendar event + confirmation email
 *   - career    -> Sheet row (+ CV saved to Drive) + alert to owner
 * Spam protection: Cloudflare Turnstile, honeypot, minimum fill time, per-phone rate limit.
 *
 * Setup: see README.md. Script Properties required:
 *   SHEET_ID, OWNER_EMAIL, TURNSTILE_SECRET   (optional: CV_FOLDER_ID, CALENDAR_ID)
 */
var TZ = 'Asia/Kolkata';
var SCHOOL = 'Orbion Prep School';
var PHONE = '8531908868';
var VISIT_MINUTES = 45;
var SLOTS = ['10:00', '11:00', '12:00', '15:00', '16:00', '17:00'];

function prop_(k) { return PropertiesService.getScriptProperties().getProperty(k); }
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function esc_(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
function cell_(v) { v = String(v == null ? '' : v).slice(0, 2000); return /^[=+\-@]/.test(v) ? "'" + v : v; } // block formula injection
function validPhone_(p) { return /^(\+?91)?[6-9]\d{9}$/.test(String(p).replace(/[\s-]/g, '')); }
function validEmail_(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) && e.length < 200; }

/** GET ?action=slots&date=YYYY-MM-DD -> which visit times are already taken */
function doGet(e) {
  try {
    if (e.parameter.action === 'slots' && /^\d{4}-\d{2}-\d{2}$/.test(e.parameter.date || '')) {
      var taken = SLOTS.filter(function (t) { return !slotFree_(e.parameter.date, t); });
      return json_({ ok: true, taken: taken, all: SLOTS });
    }
    return json_({ ok: true, service: 'orbion-forms' });
  } catch (err) { return json_({ ok: false, error: 'server' }); }
}

function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);
    // 1. cheap bot filters
    if (d.website) return json_({ ok: true });                       // honeypot filled -> pretend success
    if (d.elapsed != null && Number(d.elapsed) < 3) return json_({ ok: false, error: 'too_fast' });
    // 2. Turnstile
    if (!verifyTurnstile_(d.token)) return json_({ ok: false, error: 'captcha' });
    // 3. rate limit per phone
    var cache = CacheService.getScriptCache(), key = 'rl_' + String(d.phone || '').replace(/\D/g, '');
    if (cache.get(key)) return json_({ ok: false, error: 'rate_limit' });
    cache.put(key, '1', 60);

    var lock = LockService.getScriptLock(); lock.waitLock(20000);
    try {
      if (d.type === 'enquiry') return json_(handleEnquiry_(d));
      if (d.type === 'visit') return json_(handleVisit_(d));
      if (d.type === 'career') return json_(handleCareer_(d));
      return json_({ ok: false, error: 'bad_type' });
    } finally { lock.releaseLock(); }
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: 'server' });
  }
}

function verifyTurnstile_(token) {
  var secret = prop_('TURNSTILE_SECRET');
  if (!secret) return false;                       // fail closed
  if (!token) return false;
  var r = UrlFetchApp.fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'post', payload: { secret: secret, response: token }, muteHttpExceptions: true
  });
  try { return JSON.parse(r.getContentText()).success === true; } catch (e) { return false; }
}

function sheet_(name, headers) {
  var ss = SpreadsheetApp.openById(prop_('SHEET_ID'));
  var sh = ss.getSheetByName(name);
  if (!sh) { sh = ss.insertSheet(name); sh.appendRow(headers); sh.setFrozenRows(1); sh.getRange(1, 1, 1, headers.length).setFontWeight('bold'); }
  return sh;
}
function now_() { return Utilities.formatDate(new Date(), TZ, 'yyyy-MM-dd HH:mm:ss'); }

function mail_(to, subject, html) {
  MailApp.sendEmail({ to: to, subject: subject, htmlBody: html, name: SCHOOL, replyTo: prop_('OWNER_EMAIL') });
}
function wrap_(title, body) {
  return '<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;color:#1B2A5C">' +
    '<h2 style="margin:0 0 12px">' + title + '</h2>' + body +
    '<p style="margin-top:24px">Warm regards,<br><b>' + SCHOOL + '</b><br>Journey Beyond the Orbit<br>Call / WhatsApp: ' + PHONE + '</p>' +
    '<p style="font-size:12px;color:#6A7396">We use your details only to respond to your enquiry and do not share them with anyone else.</p></div>';
}

function handleEnquiry_(d) {
  var req = ['parent', 'relation', 'phone', 'email', 'child', 'dob', 'prog', 'year'];
  for (var i = 0; i < req.length; i++) if (!d[req[i]]) return { ok: false, error: 'missing_' + req[i] };
  if (!validPhone_(d.phone) || !validEmail_(d.email)) return { ok: false, error: 'invalid' };
  sheet_('Enquiries', ['Received', 'Parent', 'Relation', 'Phone', 'Email', 'Child', 'DOB', 'Programme', 'Academic year', 'Area', 'Heard via', 'Message', 'Status'])
    .appendRow([now_(), cell_(d.parent), cell_(d.relation), cell_(d.phone), cell_(d.email), cell_(d.child), cell_(d.dob), cell_(d.prog), cell_(d.year), cell_(d.area), cell_(d.heard), cell_(d.msg), 'New']);
  mail_(prop_('OWNER_EMAIL'), 'New enquiry: ' + d.child + ' (' + d.prog + ')',
    '<p><b>' + esc_(d.parent) + '</b> (' + esc_(d.relation) + ')<br>' + esc_(d.phone) + ' · ' + esc_(d.email) + '</p><p>Child: ' + esc_(d.child) + ', DOB ' + esc_(d.dob) + '<br>Programme: ' + esc_(d.prog) + ' · ' + esc_(d.year) + '<br>Area: ' + esc_(d.area) + '<br>Heard via: ' + esc_(d.heard) + '</p><p>' + esc_(d.msg) + '</p>');
  return { ok: true };
}

function calendar_() { var id = prop_('CALENDAR_ID'); return id ? CalendarApp.getCalendarById(id) : CalendarApp.getDefaultCalendar(); }
function slotRange_(date, time) {
  var p = date.split('-'), t = time.split(':');
  var start = new Date(+p[0], +p[1] - 1, +p[2], +t[0], +t[1]);
  return [start, new Date(start.getTime() + VISIT_MINUTES * 60000)];
}
function slotFree_(date, time) { var r = slotRange_(date, time); return calendar_().getEvents(r[0], r[1]).length === 0; }

function handleVisit_(d) {
  var req = ['parent', 'phone', 'email', 'prog', 'date', 'time'];
  for (var i = 0; i < req.length; i++) if (!d[req[i]]) return { ok: false, error: 'missing_' + req[i] };
  if (!validPhone_(d.phone) || !validEmail_(d.email) || SLOTS.indexOf(d.time) < 0 || !/^\d{4}-\d{2}-\d{2}$/.test(d.date)) return { ok: false, error: 'invalid' };
  var r = slotRange_(d.date, d.time);
  if (r[0] < new Date()) return { ok: false, error: 'past' };
  if (!slotFree_(d.date, d.time)) return { ok: false, error: 'slot_taken' };
  var ev = calendar_().createEvent('Campus visit: ' + d.parent + ' (' + d.prog + ')', r[0], r[1], {
    description: 'Parent: ' + d.parent + '\nPhone: ' + d.phone + '\nEmail: ' + d.email + '\nProgramme: ' + d.prog + '\nBooked via website'
  });
  ev.addPopupReminder(60);
  var when = Utilities.formatDate(r[0], TZ, "EEEE, d MMMM yyyy 'at' h:mm a");
  sheet_('Visits', ['Received', 'Parent', 'Phone', 'Email', 'Programme', 'Visit date', 'Visit time', 'Calendar event', 'Status'])
    .appendRow([now_(), cell_(d.parent), cell_(d.phone), cell_(d.email), cell_(d.prog), d.date, d.time, ev.getId(), 'Booked']);
  mail_(d.email, 'Your campus visit is confirmed | ' + SCHOOL,
    wrap_('Your visit is booked!', '<p>Dear ' + esc_(d.parent) + ',</p><p>We look forward to welcoming you on <b>' + when + '</b> to discuss <b>' + esc_(d.prog) + '</b>.</p><p>Need to reschedule? Call or WhatsApp ' + PHONE + '.</p>'));
  mail_(prop_('OWNER_EMAIL'), 'Campus visit booked: ' + when, '<p>' + esc_(d.parent) + ', ' + esc_(d.phone) + ', ' + esc_(d.email) + '<br>' + esc_(d.prog) + '</p><p>Added to your Google Calendar.</p>');
  return { ok: true, when: when };
}

function handleCareer_(d) {
  var req = ['name', 'phone', 'email', 'role'];
  for (var i = 0; i < req.length; i++) if (!d[req[i]]) return { ok: false, error: 'missing_' + req[i] };
  if (!validPhone_(d.phone) || !validEmail_(d.email)) return { ok: false, error: 'invalid' };
  var link = '';
  if (d.cv && d.cv.data && prop_('CV_FOLDER_ID')) {
    var okType = /\.(pdf|docx?)$/i.test(d.cv.name || '');
    if (!okType || d.cv.data.length > 4200000) return { ok: false, error: 'cv_invalid' };
    var blob = Utilities.newBlob(Utilities.base64Decode(d.cv.data), d.cv.type || 'application/octet-stream', String(d.cv.name).replace(/[^\w.\- ]/g, '_'));
    link = DriveApp.getFolderById(prop_('CV_FOLDER_ID')).createFile(blob).getUrl();
  }
  sheet_('Applications', ['Received', 'Name', 'Phone', 'Email', 'Role', 'About', 'CV link', 'Status'])
    .appendRow([now_(), cell_(d.name), cell_(d.phone), cell_(d.email), cell_(d.role), cell_(d.about), link, 'New']);
  mail_(d.email, 'We received your application | ' + SCHOOL, wrap_('Thank you for applying!', '<p>Dear ' + esc_(d.name) + ', we have received your application for <b>' + esc_(d.role) + '</b> and will be in touch.</p>'));
  mail_(prop_('OWNER_EMAIL'), 'New job application: ' + d.role, '<p>' + esc_(d.name) + ', ' + esc_(d.phone) + ', ' + esc_(d.email) + '</p><p>' + esc_(d.about) + '</p><p>CV: ' + esc_(link) + '</p>');
  return { ok: true };
}
