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
}

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse._isFree) {
      this._approvedCourses.push(newCourse);
    } else {
      console.warn(
        `Lo sentimos ${this._name}, solo puedes tomar este curso con una cuenta paga.`
      );
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse._lang !== 'english') {
      this._approvedCourses.push(newCourse);
    } else {
      console.warn(
        `Lo sentimos ${this._name}, tu cuenta no cubre cursos en inglés.`
      );
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this._approvedCourses.push(newCourse);
  }
}

class PlatziClass {
  constructor({ name, videoID, isFree = false, lang = 'spanish' }) {
    this._name = name;
    this._videoID = videoID;
    this._isFree = isFree;
    this._lang = lang;
  }
}

const basicProgramming = new PlatziClass({
  name: 'Basic Programming',
  isFree: true,
});
const htmlCss = new PlatziClass({ name: 'HTML & CSS', lang: 'english' });
const cssFlexbox = new PlatziClass({
  name: 'CSS Flexbox',
  isFree: true,
  lang: 'english',
});

const juan = new FreeStudent({
  name: 'Juan',
  username: 'juandc',
  email: 'juanito@juan.co',
  twitter: 'fjuandc',
});

const michael = new BasicStudent({
  name: 'Michael',
  username: 'mike',
  email: 'michael@dev.co',
  twitter: 'mike12',
});

const patrick = new ExpertStudent({
  name: 'Patrick',
  username: 'parik',
  email: 'parik15@dev.co',
  twitter: 'parik__',
  instagram: 'parik__',
});

juan.approveCourse(basicProgramming);
juan.approveCourse(htmlCss);
juan.approveCourse(cssFlexbox);
michael.approveCourse(basicProgramming);
michael.approveCourse(htmlCss);
michael.approveCourse(cssFlexbox);
patrick.approveCourse(basicProgramming);
patrick.approveCourse(htmlCss);
patrick.approveCourse(cssFlexbox);
