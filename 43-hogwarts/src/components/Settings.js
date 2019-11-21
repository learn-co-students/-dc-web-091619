import React from 'react'

const Settings = (props) => {
  return (
    <div>
      <button className="ui button" name="name" onClick={props.changeSort}>Sort By Name</button>
      <button className="ui button" name="weight" onClick={props.changeSort}>Sort by Weight</button>
      <button className="ui button" onClick={props.changeToggle}>Toggle Greased Pigs</button>
    </div>
  )
}

export default Settings
