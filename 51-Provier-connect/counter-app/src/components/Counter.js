import React, {Component} from 'react'
import {connect} from 'react-redux'

class Counter extends Component {
  increment = (payload) => {
    this.props.dispatch( {type: "COUNT_INCREMENT", payload} )
  }

  decrement = (payload) => {
    this.props.dispatch( {type: "COUNT_DECREMENT", payload} )
  }

  render() {
    console.log("Counter's props:", this.props)
    return (
      <div className="Counter" style={{backgroundColor: this.props.color}}>
        <h1>{this.props.count}</h1>
        <button onClick={() => this.decrement(5)}> -5 </button>
        <button onClick={() => this.decrement(1)}> - </button>
        <button onClick={() => this.increment(1)}> + </button>
        <button onClick={() => this.increment(3)}> +3 </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {count: state.count} //{props : state.???}
}

export default connect(mapStateToProps)(Counter)

// let withCount = connect(mapStateToProps)
// let EnhancedCounter = withCount(Counter)
// export default EnhancedCounter
