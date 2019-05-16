// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(insAttr) {
    super(insAttr);
    this.specialty = insAttr.specialty;
    this.favLanguage = insAttr.favLanguage;
    this.catchPhrase = insAttr.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${this.subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${this.subject}`);
  }
}

class Student extends Instructor {
  constructor(stAttr) {
    super(stAttr);
    this.previousBackground = stAttr.previousBackground;
    this.className = stAttr.className;
    this.favSubjects = stAttr.favSubjects;
  }
  listsSubjects() {
    console.log(`${this.favSubjects}`);
  }

  PRAssignment(subject) {
    console.log(
      `${Student.name} has begun sprint challenge on ${this.subject}`
    );
  }
}
