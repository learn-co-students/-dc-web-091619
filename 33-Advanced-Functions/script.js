console.log("connected")

function sayHello(){
  console.log("HELLO!")
}

function alertAnn(){
  alert("ANNNN!!!!")
}

//Flatiron
//onboard our students
// name = "DEFAULT NAME"
//name is string, process is an array of function objects
// function onBoardStudent(name, processes){
//   console.log(`Welcome, ${name}`)
//   processes.forEach((func)=>{
//     func(name)
//   })
// }
//
// function giveKeyCard(name){
//   console.log(`${name}, here is your key card`)
// }
//
// function giveLoanerLaptop(name){
//   console.log(`${name}, here if you laptop. TY for the deposit`)
// }
//
// onBoardStudent("Ann", [giveKeyCard])
// onBoardStudent("Paul", [giveKeyCard, giveLoanerLaptop])


function double(num){
  return num * 2
}

function makeNegative(x){
  return -x
}

// let newArray = [4, 5, 6].map(currVal => -currVal)
//newArray = [8, 10, 12]
// console.log(newArray)






// fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
//   .then(res => res.json())
//   .then(json => {console.log(json)})

// let wallet = 100
// function annBorrowsMoney(){
//   wallet -= 99
//   console.log(wallet)
// }
// annBorrowsMoney()
// console.log("after shopping spree", wallet)


//Everytime this is invoked, id is newly created
function x(){
  let id = 1
  let func = function (name){
    console.log(`Dear, ${name}, you ID is ${id}`)
    id++
  }
  return func
}

let onBoardStudent = x() //return a function
// x()("Ann")
// x()("paul")
// x()("Rob")
//onBoardStudent is a function







//
// (function (){
//   let bff = {firstName: "Paul"}
//   let ann = {
//     firstName: "Ann",
//     lastName: "Duong",
//     bff: bff,
//     sayHello: ()=>{console.log("ANN SAYS HI")}
//   }
//   window.ann = ann
// }())
//

























//
//
