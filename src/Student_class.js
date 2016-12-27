//Create a class Student having two fields name and roll number and a method to print the student detail.
// Create two objects of the class and use display method to print the user detail. perform the above task using ES6

import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }

}


class Student {
  constructor(name, roll_number) {
    this.name = name;
    this.roll_number = roll_number;
  }

  get display() {
    return this.display_deatils();
  }

  display_deatils() {
    return "Hi " + this.name + " your roll number is " + this.roll_number;
  }
}
let student1 = new Student("a", 1);
let student2 = new Student("b", 2);

console.log(student1.display);
console.log(student2.display);



