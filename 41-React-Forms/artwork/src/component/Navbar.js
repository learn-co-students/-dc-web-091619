import React from 'react'
import Searchbar from './Searchbar'

const Header = (props) => {
  console.log("header's props:", props)
  return (
    <div className="ui inverted blue menu navbar">
      <a href="/" className="ui item">
        <h2 className="ui header">
          <i className="paint brush icon"></i>
          <div className="content">Painter</div>
          <div className="sub header">List of Paintings</div>
        </h2>
      </a>
      <Searchbar
        searchTerm={props.searchTerm}
        changeSearch={props.changeSearch}
      />
    </div>
  )
}

export default Header
