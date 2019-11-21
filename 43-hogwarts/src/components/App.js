import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Settings from './Settings'
import PigsContainer from './PigsContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      toggleGreased: false, //false means show all hogs //true show only the greased pigs
      shownHogs: hogs //an array of all 14 hogs maybe it's sorted by name, or weight or neither??
    }
  }

  //state changing callback
  changeSort = (event) => {
    if(event.target.name === "name"){
      //resort shownHogs and save it in state
      let copyOfHogs = [...this.state.shownHogs]
      copyOfHogs.sort((a, b) => (a.name > b.name ? 1 : -1))
      console.log(event.target.name)
      this.setState({shownHogs: copyOfHogs})
    }else if (event.target.name === "weight") {
      this.setState({})
    }
  }

  //state changing callback in this class
  changeToggle = (event) => {
    this.setState({toggleGreased: !this.state.toggleGreased})
  }

  //creating a helper method
  filteredHogs = () => {
    //this
    if(this.state.toggleGreased){
      return this.state.shownHogs.filter(hog => hog.greased === true)
    }else{
      return this.state.shownHogs
    }
  }

  render() {
    return (
      <div className="App">
        < Nav />
        <Settings
          changeToggle={this.changeToggle}
          changeSort={this.changeSort}
        />
        <PigsContainer pigsData={  this.filteredHogs()  }/>
      </div>
    )
  }
}

export default App;
