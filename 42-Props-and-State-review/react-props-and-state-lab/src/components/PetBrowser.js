import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return (
    <div className="ui cards">
      {this.props.petsData.map( pet => {
        return (
          <Pet 
          key={pet.id}
          pet={pet}
          onAdoptPet={this.props.onAdoptPet}
          />
        )
      })}
    </div>
    )
  }
}

export default PetBrowser