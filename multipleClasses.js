// Object literals for a bigger object

const juan = {
  name: 'Juan',
  username: 'juandc',
  points: 100,
  socialMedia: {
    twitter: 'fjuandc',
    instagram: 'fjuandc',
    facebook: undefined,
  },
  approvedCourses: ['HTML & CSS', 'CSS Flexbox'],
  learningPaths: [
    {
      name: 'Web Development',
      courses: [
        'HTML & CSS',
        'CSS Flexbox',
        'Responsive Design',
        'Design System',
      ],
    },
    {
      name: 'Videogaming',
      courses: ['Intro to videogames', 'Unreal Engine', 'Unity 3D'],
    },
  ],
};

const miguel = {
  name: 'Miguel',
  username: 'miguelito',
  points: 1000,
  socialMedia: {
    twitter: 'miguelito',
    instagram: '_miguelito',
    facebook: undefined,
  },
  approvedCourses: ['Basic BI', 'Tableau'],
  learningPaths: [
    {
      name: 'Web Development',
      courses: [
        'HTML & CSS',
        'CSS Flexbox',
        'Responsive Design',
        'Design System',
      ],
    },
    {
      name: 'Data Science',
      courses: ['Basic BI', 'Tableau', 'DataViz'],
    },
  ],
};

// POO for bigger objects
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

class LearningPaths {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }

  addCourse(course) {
    this.courses.push(course);
  }
}

const WebDevelopment = new LearningPaths({
  name: 'Web Development',
  courses: ['HTML & CSS', 'CSS Flexbox', 'CSS Grid'],
});

const DataScience = new LearningPaths({
  name: 'Data Science',
  courses: ['Basic BI', 'Tableau', 'DataViz'],
});

const michael = new Student({
  name: 'Michael',
  username: 'mike',
  email: 'michael@dev.co',
  twitter: 'mike12',
  learningPaths: {
    WebDevelopment,
  },
});

const patrick = new Student({
  name: 'Patrick',
  username: 'parik',
  email: 'parik15@dev.co',
  twitter: 'parik__',
  instagram: 'parik__',
  learningPaths: {
    WebDevelopment,
    DataScience,
  },
});
