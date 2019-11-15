// console.log(this)
//this === window
//JS is 'working off' the window object



// arrow functions DO NOT create their own value of this
// they inherit the value of this from their lexical scope
//this is window because outside this function this === window
console.log('this in the outter scope:', this)
let greet = function () {
  let aTime = Date.now()
  console.log(this) //this is also window because of lexical scoping
}


let paul = {
  firstName: "Paul",
  lastName: "Nicholsen",
  greet: greet
}

let ann = {
  firstName: "Ann",
  lastName: "Duong",
  greet: greet
}

//ann.greet()
//the object JS is working off of is ann

//greet()
//this object we are working off of is the global object

// class Teacher {
//   constructor(firstName){
//     this.firstName = firstName
//   }
//   greet = () => {
//     console.log(this)
//   }
//   //this is going to be whatever the value of this is outside in the class
// }

// let annD = new Teacher("Ann")
// let paulN = new Teacher("Paul")
//
// document.querySelector("#ann").addEventListener('click', annD.greet)
// document.querySelector("#paul").addEventListener('click', paulN.greet)
document.querySelector("#ann").addEventListener('click', greet.bind(ann))
// document.querySelector("#window").addEventListener('click', greet)
//this is window, sometimes it's the HTML node XXXXXX
//this to always be our instances


















//
