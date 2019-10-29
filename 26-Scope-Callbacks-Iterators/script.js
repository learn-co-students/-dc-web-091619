// function sayHello(){
//   console.log("hey binding.fly")
// }


//function declaration
// function sayHello(){
//   console.log("hey binding.fly")
// }
//
// //function expression
// let greetPerson = function(name){
//   console.log(`Hello, ${name}`)
// }
//
// //arrow function (a type of function expressions)
// let addTogether = (num1, num2, num3) => num1 + num2 + num3
//
// let makeNegative = x => -x


// function addOneToNumber(num){ //declaration
//   return num + 1
// }

// let addOneToNumber = function(num){ //expression
//   return num + 1
// }



//Scope
//var can be redeclared and/or reassigned in the same scope
// var teacher = "Jenny"
// var teacher = "Joseph"
// teacher = "Jenny"
// console.log(teacher)

//let cannot redeclared in the same scope
//let CAN be reassigned in the same scope
// let teacher = "Jenny"
// teacher = "Joseph"
// teacher = "Ann"
// console.log(teacher)

//const cannot redeclare in the same scope
//const cannot be reassigned in the same scope
// const teacher = {name: "Jenny"}
// teacher.name = "Joseph"
// teacher.age = 25
// // teacher = {name: "Ann"}
// console.log(teacher)


// let teacher = "Ann"
//
// function aFunction(){
//   //find the variable teacher give it a value of "Jenny"
//   let teacher1 = teacher
//   teacher1 = "Jenny"
//   // if(true){
//   //   teacher = "Joseph"
//   //   console.log("inside a block:", teacher)
//   // }
//   console.log("inside function:", teacher1)
// }
//
// aFunction()
//
// console.log("in global scope:", teacher)



// function sayGrace(){
//   console.log("Grace")
//   return undefined
// }
//
// function sayHey(){
//   console.log("Hey")
// }
//
// //assume x is a function obj
// function executeThis(x){
//   //x = sayhey the function obj
//   x()
// }


function timesTwo(num){
  return num * 2
}
//
// [1, 2, 3].map( timesTwo )

//=>[2, 4, 6]

//Build our own .map
function myMap(arr, func){
  let newArray = []
  for (let i = 0; i<arr.length; i++){
    let newVal = func(arr[i]) //1, 2, 3
    newArray.push(newVal)
  }
  return newArray
}

myMap([1, 3, 4], timesTwo)

function myFilter(arr, func){
  let newArray = []
  for(let i=0; i<arr.length; i++){
    if( func(arr[i]) ){
      newArray.push(arr[i])
    }
  }
  return newArray
}

function greaterThenThree(num){
  return num > 3
}

myFilter([1, 2, 3, 4, 5], greaterThenThree)
//[1, 2, 3, 4, 5] => [4, 5]
//num > 3


//[1, 3, 4] => [2, 6, 8]























// console.log(cerealData)
