
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for age
  set age(value) {
    this._age = value;
  }
}

// Subclass: Student
class Student extends Person {
  study() {
    log(`${this.name} is studying`);
  }
}

// Subclass: Teacher
class Teacher extends Person {
  teach() {
    log(`${this.name} is teaching`);
  }
}

// Utility function to output to the screen
function log(message) {
  const output = document.getElementById('output');
  output.textContent += message + '\n';
}

// Testing functions
function testPerson() {
  const person = new Person("John", 25);
  log(`Name: ${person.name}`); // Getter
  person.age = 30;             // Setter
  log(`Updated Age: ${person.age}`);
}

function testStudent() {
  const student = new Student("Alice", 22);
  student.study(); // Should log "Alice is studying"
}

function testTeacher() {
  const teacher = new Teacher("Bob", 40);
  teacher.teach(); // Should log "Bob is teaching"
}

class Person {}

class Student extends Person {}

class Teacher extends Person {}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
