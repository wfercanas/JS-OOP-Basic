// ----------------------------------------------------------Object literal
const natalia = {
  // attribute
  name: 'Natalia',
  age: 20,
  approvedCourses: ['HTML & CSS', 'CSS Grid'],

  // Methods
  // addApprovedCourse: function () {}
  addApprovedCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  },
};

natalia.addApprovedCourse('CSS Flexbox');
natalia.name = 'Nath';
natalia.age += 1;

console.log(natalia.name); // 'Nath'
console.log(natalia.age); // 21
console.log(natalia.approvedCourses); // ['HTML & CSS, 'CSS Grid', 'CSS Flexbox']