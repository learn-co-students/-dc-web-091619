const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", ()=>{
  fetch('http://localhost:3000/trainers')
  .then(res => res.json())
  .then(trainersArray => {
    let app = new App(trainersArray)
    document.querySelector("body").innerHTML = app.render() //actually add to DOM
    //add event listeners here
  })

})
