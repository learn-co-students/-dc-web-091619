import React from 'react';
import '../App.css';
import DisplayPokemon from '../components/DisplayPokemon'
import PokemonContainer from './PokemonContainer'
import Searchbar from '../components/Searchbar'
const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      team: [],
      pokemon: [],
      displayPokemon: null,
      searchText: ''
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      this.setState({pokemon: data.results})
    })
  }

  onDisplayPokemon = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.setState({displayPokemon: data})
    })
  }

  addPokemon = (pokemonObj) => {
    //push pokemon in [team]
    if(this.state.team.includes(pokemonObj)){
      alert("already on the team")
    }else{
      if(this.state.team.length >= 6){
        alert("cannot have more than 6 pokemon")
      }else{
        let copy = [...this.state.team]
        pokemonObj.team = true
        copy.push(pokemonObj)
        this.setState({team: copy})
      }
    }
  }

  removePokemon = (pokemonObj) => {
    pokemonObj.team = false
    //find pokemonObj from this.state.team
    //remove it
    //set state to by the new array with that pokemon not in it
    let newTeam = this.state.team.filter(poke => poke !== pokemonObj)
    this.setState({team: newTeam})
  }

  onSearch = (event) => {
    this.setState({searchText: event.target.value})
  }

  render(){
    return (
      <div className="App">
        <img alt="Pokemon" width="200" src="https://d33wubrfki0l68.cloudfront.net/42936b3e4d03c9b7c5927e3752a36cef7ff8bdf0/53627/images/pokemon.png"/>
        <PokemonContainer
          title="Team"
          pokemonList={this.state.team}
          clickPokemon={this.removePokemon}
          onDisplayPokemon={this.onDisplayPokemon}
        />
        <DisplayPokemon
          shownPokemon={this.state.displayPokemon}
        />
        <Searchbar
          onSearch={this.onSearch}
          value={this.state.searchText}
        />
        <PokemonContainer
          title="Pokemon"
          onDisplayPokemon={this.onDisplayPokemon}
          pokemonList={this.state.pokemon.filter(p => p.name.includes(this.state.searchText))}
          clickPokemon={this.addPokemon}
        />
      </div>
    );
  }
}

export default App;
