import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      allSushis: [],
      index: 0,
      currentSushis: [],
      eatenSushis: [],
      budget: 100
    }
  }

  nextFour = () => {
    
    let newIndex = this.state.index + 4

    let newCurrentSushis = this.state.allSushis.slice(newIndex, newIndex + 4)  // (4,8)
    
    console.log(newCurrentSushis)
    this.setState({
      index: newIndex, 
      currentSushis: newCurrentSushis
    })
  }

  eatenSushis = (sushiObj) => {
    let newBudget = this.state.budget - sushiObj.price

    if(newBudget < 0) {
      alert("you Broke!")
    } else {
      this.setState({
        eatenSushis: [...this.state.eatenSushis, sushiObj],
        budget: newBudget
      })
    }
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(sushiData => {
      let newCurrentSushis = sushiData.slice(0,4)
      this.setState({
        allSushis: sushiData,
        currentSushis: newCurrentSushis
      })
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          currentSushis={this.state.currentSushis} 
          nextFour={this.nextFour} 
          eatenSushis={this.eatenSushis}
          orderedSushis={this.state.eatenSushis}
        />
        <Table 
          eatenSushis={this.state.eatenSushis} 
          wallet={this.state.budget}
        />
      </div>
    );
  }
}

export default App;