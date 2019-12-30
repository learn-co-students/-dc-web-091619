
import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import BandContainer from './BandContainer';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BandInput addBand={this.props.addBand}/>
        <BandContainer bands={this.props.bands} deleteBand={this.props.deleteBand}/>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    bands: state.myBands
  } 
}

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({type: "DELETE_BAND", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(App)