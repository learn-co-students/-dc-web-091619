import React, {Component} from 'react'
import {connect} from 'react-redux'

class Header extends Component {
  render() {
    return (
      <header className="App-header" style={{color: this.props.color}}>
        <h1 className="App-title">Welcome to React</h1>
        <h3>{`The current count is less than ${this.props.count + (5 - (this.props.count % 5))}`}</h3>
      </header>
    );
  }
}

const mapStateToProps = (state) => { //takes inarg that is the store state
  return { //return an object that maps props to store
    count: state.count //{count: 0}
  }
}

export default connect(mapStateToProps)(Header)

// const withCount = connect(mapStateToProps)
// const HeaderWithCount = withCount(Header)
// export default HeaderWithCount
