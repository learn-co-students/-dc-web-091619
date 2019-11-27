import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar'
import PaintingsList from './PaintingsList'
import PaintingDetails from './PaintingDetails'
import About, {NotFound} from './About'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {
        paintingsList: [],
        searchTerm: ''
      }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/paintings`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        paintingsList: json
      })
    })
  }

  onSearchHandler = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar title='Paintr' icon="paint brush" color="blue" subtitle="List of Paintings"/>

          <Switch>
              <Route path="/paintings/:slug" render={(props) => {
                console.log("rendering show page")
                let slug = props.match.params.slug
                let foundPainting = this.state.paintingsList.find(p => p.slug === slug)
                return <PaintingDetails painting={foundPainting}/>
              }} />
              <Route exact path="/paintings" render={(props)=>{
                return <PaintingsList
                  onSearchHandler={this.onSearchHandler}
                  filterTerm={this.state.searchTerm}
                  paintings={this.state.paintingsList}
                  onSelectPainting={this.onSelectPainting}
              />}}/>
              <Route exact path="/" component={About}/>
              <Route path="/" component={NotFound}/>
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}
/*
<Route exact path="/">
  <Redirect to="/home"/>
</Route>
*/

/*
<About />
<PaintingDetails painting={this.state.selectedPainting}/>
<PaintingsList
  onSearchHandler={this.onSearchHandler}
  filterTerm={this.state.searchTerm}
  paintings={this.state.paintingsList}
  onSelectPainting={this.onSelectPainting}
/>
*/

export default App;
