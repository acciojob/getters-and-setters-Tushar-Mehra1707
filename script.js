// script.js

// Person Class
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
  set age(age) {
    this._age = age;
  }
}

// Student Class (Inherits from Person)
class Student extends Person {
  constructor(name, age) {
    super(name, age);  // Call the constructor of the parent class
  }

  // Method for student to study
  study() {
    console.log(`${this.name} is studying`);
    return `${this.name} is studying`;  // For display in the HTML
  }
}

// Teacher Class (Inherits from Person)
class Teacher extends Person {
  constructor(name, age) {
    super(name, age);  // Call the constructor of the parent class
  }

  // Method for teacher to teach
  teach() {
    console.log(`${this.name} is teaching`);
    return `${this.name} is teaching`;  // For display in the HTML
  }
}

// Creating instances and testing the functionality:

// Create a Person instance
const person = new Person("John", 25);
document.getElementById("personInfo").innerText = `Person: Name - ${person.name}, Age - ${person.age}`;

// Change the age using the setter
person.age = 30;
document.getElementById("personInfo").innerText += `, New Age - ${person.age}`;

// Create a Student instance
const student = new Student("Alice", 22);
document.getElementById("studentInfo").innerText = student.study();  // This will log Alice is studying

// Create a Teacher instance
const teacher = new Teacher("Bob", 40);
document.getElementById("teacherInfo").innerText = teacher.teach();  // This will log Bob is teaching
