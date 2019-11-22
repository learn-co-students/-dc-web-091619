import React from 'react'
import Pokemon from '../components/Pokemon'

//This is our Team AND our Wild Pokemon
class PokemonContainer extends React.Component{
  render(){
    return (
      <div>
        <h3>{`${this.props.title}:`}</h3>
        {this.props.pokemonList.map(poke => <Pokemon
          key={poke.name}
          pokemonObj={poke}
          clickPokemon={this.props.clickPokemon}
          title={this.props.title}
          displayMe={this.props.onDisplayPokemon}
        /> )}
      </div>
    )
  }
}

export default PokemonContainer
