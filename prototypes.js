// ----------------------------------------------------------Prototypes
function Student(name, age, approvedCourses) {
  this.name = name;
  this.age = age;
  this.approvedCourses = approvedCourses;

  // this.addApprovedCourse = function (newCourse) {
  //   this.approvedCourses.push(newCourse);
  // }
}

Student.prototype.addApprovedCourse = function (newCourse) {
  this.approvedCourses.push(newCourse);
};

const juanita = new Student('Juanita', 18, ['Intro to Web Apps']);
juanita.addApprovedCourse('Unreal Engine');

console.log(juanita.approvedCoursed); // ['Intro to Web Apps', 'Unreal Engine']