import React, { Component } from 'react';
import '../App.css';
import PaintingsContainer from './PaintingsContainer'
import Nav from '../component/Navbar'
import Searchbar from '../component/Searchbar'

class App extends Component {
  constructor(){
    super()
    this.state = {
      searchTerm: "Portrait",
    }
  }

  //write a state changing function/Callback
  changeSearchTerm = (event) => {
    console.log(event.target.value)
    this.setState({searchTerm: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <Nav searchTerm={this.state.searchTerm} changeSearch={this.changeSearchTerm}/>
        <PaintingsContainer searchTerm={this.state.searchTerm}/>
      </div>
    );
  }
}

export default App;
