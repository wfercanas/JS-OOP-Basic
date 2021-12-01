// -------------------------------------Classes
class Student {
  constructor(name, age, approvedCourses) {
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;

    // this.addApprovedCourse = function (newCourse) {
    //   this.approvedCourses.push(newCourse);
    // }
  }

  addApprovedCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

const miguel = new Student('Miguel', 35, []);
miguel.addApprovedCourse('Tableau');

// ------------------------------------- RORO Classes
// Receive an Object, Return an Object
class Apprentice {
  constructor({ name, age, approvedCourses = [], email }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.approvedCourses = approvedCourses;
  }

  addApprovedCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

const pablo = new Apprentice({
  age: 28,
  email: 'pablo@dev.co',
  name: 'Pablo',
});

