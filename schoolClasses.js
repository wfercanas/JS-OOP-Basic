class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }

  addCourse(course) {
    this.courses.push(course);
  }
}

class Course {
  constructor({ name, teacher, classes = [], comments = [] }) {
    this.name = name;
    this.teacher = teacher;
    this.classes = classes;
    this.comments = comments;
  }
}

class Class {
  constructor({ title, videoURL, description, comments = [] }) {
    this.title = title;
    this.videoURL = videoURL;
    this.description = description;
    this.comments = comments;
  }
}

const basicProgramming = new Course('Basic Programming');
const htmlCss = new Course('HTML & CSS');
const cssFlexbox = new Course('CSS Flexbox');
const cssGrid = new Course('CSS Grid');
const basicBI = new Course('Basic BI');
const tableau = new Course('Tableau');
const dataViz = new Course('DataViz');
const unrealEngine = new Course('Unreal Engine');
const unity = new Course('Unity');

const WebDevelopment = new LearningPath({
  name: 'Web Development',
  courses: [basicProgramming, htmlCss, cssFlexbox, cssGrid],
});

const DataScience = new LearningPath({
  name: 'Data Science',
  courses: [basicProgramming, basicBI, tableau, dataViz],
});

const Videogaming = new LearningPath({
  name: 'Videogaming',
  courses: [basicProgramming, unrealEngine, unity],
});
