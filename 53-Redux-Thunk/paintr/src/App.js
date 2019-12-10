import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import PaintingsContainer from "./components/PaintingsContainer";
import AboutPage from "./components/AboutPage";
import { connect } from 'react-redux';
import { fetchingPaintings } from './redux/actions.js';



class App extends Component {
  componentDidMount() {
    this.props.fetchingPaintings()
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/about" component={AboutPage} />
          <Route path="/" component={PaintingsContainer} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // props: () => { dispatch(someActionObject)}
    fetchingPaintings: () => { dispatch(fetchingPaintings())}
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
