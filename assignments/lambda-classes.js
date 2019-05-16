// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
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
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(stAttr) {
    super(stAttr);
    this.previousBackground = stAttr.previousBackground;
    this.className = stAttr.className;
    this.favSubjects = stAttr.favSubjects;
  }
  listsSubjects() {
    return `${this.favSubjects}`;
  }

  PRAssignment(subject) {
    return `${Student.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttr) {
    super(pmAttr);
    this.gradClassName = pmAttr.gradClassName;
    this.favInstructor = pmAttr.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standby times!`;
  }

  debugsCode(Student, subject) {
    return `${this.name} debugs ${Student.name}'s code on ${subject}`;
  }
}

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const bob = new Person({
  name: "Bob",
  age: 45,
  location: "Brooklyn, NY"
});

const Carrie = new Student({
  name: "Carrie",
  age: 22,
  location: "Orlando, FL",
  previousBackground: "College",
  className: "Web20",
  favSubjects: "React"
});

const Ryan = new ProjectManager({
  name: "Ryan",
  age: 25,
  location: "Georgia"
});

console.log(bob.speak());
console.log(fred.demo("math"));
console.log(fred.grade(Carrie, "computer science"));

console.log(Carrie.listsSubjects());
console.log(Carrie.PRAssignment("computer science"));
console.log(Carrie.sprintChallenge("Javascript"));

console.log(Ryan.standUp("web20_sprint3"));
console.log(Ryan.debugsCode(Carrie, "Math"));
