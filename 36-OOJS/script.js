console.log('connected')

// function instructorGenerator(firstName, lastName){
//   return {
//     firstName,
//     lastName
//   }
// }
//
// let ann = instructorGenerator("Ann", "Duong")
// let paul = instructorGenerator("Paul", "Nicholsen")

// function Instructor(firstName, lastName){
//   //this is {}
//   this.firstName = firstName
//   this.lastName = lastName
//   //this.greet
// }
//
// Instructor.prototype.greet = function(){
//   console.log(`${this.firstName} says hi`)
// }
//
// Instructor.prototype.leaveWork = function(){
//   console.log(`${this.firstName} is going home`)
// }
//
// let ann = new Instructor("ann", "duong")
// //let ann = {}
// //function is invoked where this is {}
// //Instructor.bind({})
// let paul = new Instructor("paul", "nicholsen")
//
//

class Person {
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
  }

  greet(){
    console.log(`${this.firstName} says hi`)
  }
}

class Instructor extends Person {
  static all = []

  constructor(firstName, lastName, employeeId){
    super(firstName, lastName)
    this.employeeId = employeeId
    Instructor.all.push(this)
  }

  leaveWork(){
    console.log(`${this.firstName} is leaving`)
  }

  static holiday(){
    console.log("instructors are on holiday")
  }
}

let ann = new Instructor("ann", "duong", 2)
let paul = new Instructor('paul', 'nicholsen', 1)
let jane = new Person('jane', 'doe')

























//Spread ... with objects and arrays
//Great for making copies of things
let obj = {name : "Fido", breed: "German Shepard", age: 5}
let newObj = {...obj}
// let newObj = { name: obj.name, ...}
