import React from 'react'

const Searchbar = (props) => {

  return (
    <input className="search"
      onChange={props.onSearch}
      value={props.value}
    />
  )
}

export default Searchbar
