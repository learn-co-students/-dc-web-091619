const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


document.addEventListener("DOMContentLoaded", () => {
 
  fetchTrainers()
})

function fetchTrainers() {
  fetch(TRAINERS_URL)
  .then(response => response.json())
  .then(trainerArray => {
    trainerArray.forEach(trainerObj => renderTrainer(trainerObj))
  })
}

{/* <div class="card" data-id="1"><p>Prince</p>
  <button data-trainer-id="1">Add Pokemon</button>
  <ul>
    <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
    <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
    <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
    <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
  </ul>
</div> */}

function renderTrainer(trainerObj) {
  
  // create card div
  let card = document.createElement("div")
  card.classList.add("card")
  card.dataset.id = trainerObj.id
  
  // create p 
  let p = document.createElement("p")
  p.innerText = trainerObj.name

  card.appendChild(p)

  // create button
  let btn = document.createElement('button');
  btn.dataset.trainerId = trainerObj.id
  btn.innerText = "Add Pokemon"
  btn.addEventListener("click", addPokemon)

  // create ul
  let ul = document.createElement('ul')

  trainerObj.pokemons.forEach(pokemonObj => {
  
    renderPokemon(pokemonObj, ul)
  })

  let main = document.querySelector("main")

  card.append(btn, ul)
  main.appendChild(card)
}


function renderPokemon(pokemonObj, ul) {


  // create li
 let li = document.createElement("li")
 li.innerText = `${pokemonObj.nickname} (${pokemonObj.species})`


 // create button
 let btn = document.createElement("button")
 btn.classList.add("release")
 btn.dataset.pokemonId = pokemonObj.id
 btn.innerText = "Release"
 btn.addEventListener("click", releasePokemon)

 li.appendChild(btn)
 ul.appendChild(li)

}

function releasePokemon(event) {
  let pokemonId = event.target.dataset.pokemonId

  fetch(`${POKEMONS_URL}/${pokemonId}`, {
    method: "DELETE"
  }).then(() => {
   event.target.parentElement.remove()
  })
}

function addPokemon(event) {
  let trainerId = event.target.dataset.trainerId
  let ul = event.target.nextElementSibling
 

  let data = {
    trainer_id: trainerId
  }

  fetch(POKEMONS_URL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => renderPokemon(data, ul))

}