import React from 'react'

//clas component => this.props
class Header extends React.Component {
  render(){
    // console.log("Header", this.props)
    return (
      <div className={`ui inverted ${this.props.color} menu navbar`}>
        <a href="/" className="item">
          <h2 className="ui header">
            <i className={`${this.props.icon} icon`}></i>
            <div className="content">Painter</div>
            <div className="sub header">List of paintings</div>
          </h2>
        </a>
      </div>
    )
  }
}

export default Header
