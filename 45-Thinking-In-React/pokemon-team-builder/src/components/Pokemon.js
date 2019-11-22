import React from 'react'

const Pokemon = (props) => {
  let color
  if(!props.pokemonObj.team || props.title === "Team"){
    color = "FFD700"
  }else{
    color = "gray"
  }
  return (
    <div
      className="pokemon"
      style={{backgroundColor: color}}
      onClick={() => props.displayMe(props.pokemonObj.url)}
      onDoubleClick={  (event)=>{ props.clickPokemon(props.pokemonObj) }  }
    >{props.pokemonObj.name}
    </div>
  )
}

export default Pokemon
