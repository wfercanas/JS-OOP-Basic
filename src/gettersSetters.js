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
    this._name = name;
    this._email = email;
    this._username = username;
    this._socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this._approvedCourses = approvedCourses;
    this._learningPaths = learningPaths;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get email() {
    return this._email;
  }

  set email(newEmail) {
    this._email = newEmail;
  }

  get username() {
    return this._username;
  }

  set username(newUsername) {
    this._username = newUsername;
  }

  get socialMedia() {
    return this._socialMedia;
  }

  set socialMedia({ newTwitter, newInstagram, newFacebook }) {
    this._socialMedia = {
      twitter: newTwitter,
      instagram: newInstagram,
      facebook: newFacebook,
    };
  }

  get approvedCourses() {
    return this._approvedCourses;
  }

  set approvedCourses(newCourse) {
    this._approvedCourses.push(newCourse);
  }

  get learningPaths() {
    return this._learningPaths;
  }

  set learningPaths(newLearningPath) {
    this._learningPaths.push(newLearningPath);
  }
}

class LearningPath {
  constructor({ name, courses = [] }) {
    this._name = name;
    this._courses = courses;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get courses() {
    return this._courses;
  }

  set courses(newCourse) {
    this._courses.push(newCourse);
  }
}

class Course {
  constructor({ name, teacher, classes = [], comments = [] }) {
    this._name = name;
    this._teacher = teacher;
    this._classes = classes;
    this._comments = comments;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get teacher() {
    return this._teacher;
  }

  set teacher(newTeacher) {
    this._teacher = newTeacher;
  }

  get classes() {
    return this._classes;
  }

  set classes(newClass) {
    this._classes.push(newClass);
  }

  get comments() {
    return this._comments;
  }

  set comments(newComment) {
    this._comments = newComment;
  }
}

class Class {
  constructor({ title, videoURL, description, comments = [] }) {
    this._title = title;
    this._videoURL = videoURL;
    this._description = description;
    this._comments = comments;
  }

  get title() {
    return this._title;
  }

  set title(newTitle) {
    this._title = newTitle;
  }

  get videoURL() {
    return this._videoURL;
  }

  set videoURL(newVideoURL) {
    this._videoURL = newVideoURL;
  }

  get description() {
    return this._description;
  }

  set description(newDescription) {
    this._description = newDescription;
  }

  get comments() {
    return this._comments;
  }

  set comments(newComment) {
    this._comments = newComment;
  }
}

const basicProgramming = new Course({ name: 'Basic Programming' });
const htmlCss = new Course({ name: 'HTML & CSS' });
const cssFlexbox = new Course({ name: 'CSS Flexbox' });
const cssGrid = new Course({ name: 'CSS Grid' });
const basicBI = new Course({ name: 'Basic BI' });
const tableau = new Course({ name: 'Tableau' });
const dataViz = new Course({ name: 'DataViz' });
const unrealEngine = new Course({ name: 'Unreal Engine' });
const unity = new Course({ name: 'Unity' });

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
