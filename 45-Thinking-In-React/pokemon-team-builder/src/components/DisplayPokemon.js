import React from 'react'

const DisplayPokemon = (props) => {
  console.log(props.shownPokemon)
  return props.shownPokemon === null ? null : (
    <div className="card details">
      <div>
        <div className="row">{props.shownPokemon.name.toUpperCase()}</div>
        <div className="row">
          <div><img alt="" src={props.shownPokemon.sprites.front_shiny} /></div>
          {props.shownPokemon.stats.map(stat => {
            return (
              <div
                key={stat.stat.name}
                className="block">{stat.stat.name}: {stat.base_stat}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DisplayPokemon
