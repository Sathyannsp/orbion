/* Site content. Edit this file to change events, articles, team and testimonials. */
export interface ContentItem { [k: string]: any }

export const events: ContentItem[] = [
  {
    "title": "Open House",
    "category": "Open house",
    "date": "TBA",
    "summary": "Tour the campus plans and meet our team."
  },
  {
    "title": "Admission announcements",
    "category": "Admissions",
    "date": "TBA",
    "summary": "Dates and updates for June 2027 admissions."
  },
  {
    "title": "School celebrations",
    "category": "Celebrations",
    "date": "TBA",
    "summary": "Festivals, opening day and graduation."
  },
  {
    "title": "Children’s activities",
    "category": "Activities",
    "date": "TBA",
    "summary": "Themed weeks, art days and storytelling."
  },
  {
    "title": "Special events",
    "category": "Special",
    "date": "TBA",
    "summary": "Guest sessions and community events."
  }
]

export const blog: ContentItem[] = [
  {
    "title": "Settling your child into a first school day",
    "category": "parenting",
    "label": "Parenting",
    "summary": "Gentle routines that make mornings easier."
  },
  {
    "title": "Why play is the work of childhood",
    "category": "ecd",
    "label": "Early Childhood Development",
    "summary": "What children learn when they play."
  },
  {
    "title": "Five weekend activities using what’s at home",
    "category": "activities",
    "label": "Learning Activities",
    "summary": "Simple ideas with no special supplies."
  },
  {
    "title": "Helping shy children find their voice",
    "category": "communication",
    "label": "Communication Skills",
    "summary": "Small steps toward confident speaking."
  },
  {
    "title": "Letting messy art happen",
    "category": "creativity",
    "label": "Child Creativity",
    "summary": "Why process matters more than product."
  },
  {
    "title": "Little scientists: asking “why?” together",
    "category": "stem",
    "label": "STEM Education",
    "summary": "Turning questions into experiments."
  }
]

export const team: ContentItem[] = [
  {
    "name": "Soniya",
    "role": "Founder",
    "bio": "Bio to be added.",
    "photo": ""
  },
  {
    "name": "Ranjini",
    "role": "Principal",
    "bio": "Bio to be added.",
    "photo": ""
  },
  {
    "name": "Sowmya",
    "role": "Teacher",
    "bio": "Bio to be added.",
    "photo": ""
  },
  {
    "name": "Tanu",
    "role": "Teacher",
    "bio": "Bio to be added.",
    "photo": ""
  }
]

export const testimonials: ContentItem[] = [
  {
    "group": "parent",
    "name": "Parent name",
    "quote": "Warm teachers and a happy child at pick-up time.",
    "sample": true
  },
  {
    "group": "parent",
    "name": "Parent name",
    "quote": "We love the weekly themes and the stories my child brings home.",
    "sample": true
  },
  {
    "group": "parent",
    "name": "Parent name",
    "quote": "I trust the team with my child every day.",
    "sample": true
  },
  {
    "group": "student",
    "name": "Student name",
    "quote": "I like speaking in front of the class now.",
    "sample": true
  },
  {
    "group": "student",
    "name": "Student name",
    "quote": "The AI & STEM Lab projects are really fun.",
    "sample": true
  },
  {
    "group": "teacher",
    "name": "Teacher name",
    "quote": "A supportive team that puts children first.",
    "sample": true
  }
]

