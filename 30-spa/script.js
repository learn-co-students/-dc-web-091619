

// When <some event happens> I want to make <this type of fetch call>
// and <manipulate the DOM in this way>


document.addEventListener("DOMContentLoaded", function(){
    gottaFetchEmAll()
    getForm().addEventListener("submit", submitHandler)
});


function getForm() {
    return document.querySelector("form")
}

function gottaFetchEmAll() {

    fetch("http://localhost:3000/pokemon")
        .then( response => response.json())
        .then( pokemonArray =>{
            pokemonArray.forEach( pokemon => renderPokemon(pokemon) )
        })

}

function renderPokemon(pokemon) {
    // As a User, I can see all the Pokemon
    // When the page loads, I want to make a GET request to /pokemon,
    // and render all the Pokemons to the screen
    let pokemonContainer = document.getElementById("pokemon-container")
    let pokemonCard = document.createElement("div")
    pokemonCard.classList.add("card")
    pokemonCard.id = `pokemon-${pokemon.id}`
    let header = document.createElement("h3")
    header.innerText = pokemon.name
    pokemonCard.appendChild(header)
    pokemonContainer.appendChild(pokemonCard)
    let pokemonImage = document.createElement("img")
    pokemonImage.src = pokemon.sprite
    pokemonCard.appendChild(pokemonImage)
    pokemonCard.addEventListener("click", deletePokemon)
}

function submitHandler(event) {
    // As a User, I can add a Pokemon with a form and render it to the page
    // When user submits the form, I want to make a POST fetch to /pokemon
    // and add a new Pokemon card
    event.preventDefault()
    let new_name = document.querySelector("#name-input").value 
    let new_sprite = document.querySelector("#sprite-input").value 
    let data = {name: new_name, sprite: new_sprite}
    fetch("http://localhost:3000/pokemon", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(pokemon => renderPokemon(pokemon))
    getForm().reset()
}

function deletePokemon(event) {
    // As a User, I can delete a Pokemon by clicking on it

    // When a user clicks on a pokemon card, I want to make a DELETE fetch to /pokemon/:id
    // and removes pokemon from the page 
    let card = event.currentTarget
    let id = card.id.split("-")[1]
    fetch(`http://localhost:3000/pokemon/${id}`, {
        method: "DELETE"
    }).then(() => card.remove())
    .catch(() => alert("Server Error"))
}

