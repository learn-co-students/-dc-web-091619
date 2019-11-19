import React from 'react'

const Searchbar = (props) => {
  return (
    <div className="right menu">
      <div className="item">
        <input
        className="search"
        onChange={props.changeSearch}
        value={props.searchTerm}
        placeholder="Search..." />
      </div>
    </div>
  )
}

export default Searchbar
