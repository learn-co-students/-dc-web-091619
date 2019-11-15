class Trainer {
  constructor(trainer){
    this.id = trainer.id
    this.name = trainer.name
    let pokemonInstance = trainer.pokemons.map(pokemonObj => new Pokemon(pokemonObj))
    this.pokemons = pokemonInstance
  }

  render(){
    return `
    <div class="card" data-id="${this.id}"><p>${this.name}</p>
      <button data-trainer-id="${this.id}">Add Pokemon</button>
      <ul>
        ${this.pokemons.map(pokemonIn => pokemonIn.render()).join("")}
      </ul>
    </div>
    `
  }
}
