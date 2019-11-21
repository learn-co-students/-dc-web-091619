import React from 'react'

//class components => this.props
//function components => props //assuming props is an argument

//PigTile should have some state?
//this.state = {showDetails: bool}

class PigTile extends React.Component{
  constructor(){
    super()
    this.state = {
      showDetails: false //true = details is visable
    }
  }

  //When click on PigTile, change state of showDetails to true, that should render on the DOM
  //state changing callback
  toggleDetails = () => {
    this.setState({showDetails: !this.state.showDetails})
  }

  render(){
    let fileName = this.props.pigObject.name.toLowerCase().split(" ").join("_")
    let {pigObject} = this.props
    return (
      <div className="ui card" onClick={this.toggleDetails}>
        <h4>{pigObject.name}</h4>
        <img alt={pigObject.name} src={require(`../hog-imgs/${fileName}.jpg`)}/>
        {
          this.state.showDetails && (
            <div>
              <p>Weight: {pigObject.weight}</p>
              <p>Specialty: {pigObject.specialty}</p>
              <p>Highest Medal Achieved: {pigObject["highest medal achieved"]}</p>
              <p>Greased: {`${pigObject.greased}`}</p>
            </div>
          )
        }
      </div>
    )
  }
}

export default PigTile
