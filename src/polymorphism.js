class Comment {
  constructor({ content, studentName, studentRole = 'student' }) {
    this._content = content;
    this._studentName = studentName;
    this._studentRole = studentRole;
    this._likes = 0;
  }

  publish() {
    console.log(
      `${this._studentName} [${this._studentRole}]:
      Likes: ${this._likes}

      ${this._content}
    `
    );
  }
}

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

  publishComment(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this._name,
    });

    comment.publish();
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

class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this._approvedCourses.push(newCourse);
  }

  publishComment(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this._name,
      studentRole: 'teacher',
    });

    comment.publish();
  }
}

const freddy = new TeacherStudent({
  name: 'Freddy Vega',
  username: 'freddier',
  email: 'freddy@platzi.com',
  twitter: 'freddier',
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
