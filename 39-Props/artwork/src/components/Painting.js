import React from 'react'
//import something dynamically

//Painting is a function but it's also a component
//this.prop is for class components
//MUST PASS in props as argument

// let {paintingObj: {title, image, dimensions: {width, height}, artist: {name}}} = props
//creating variables artist, title, dimensions
const Painting = ({paintingObj: {title, image, dimensions: {width, height}, artist: {name}}}) => {
  return (
    <div className="ui card">
      <div className="image">
        <img alt={title} src={image} />
      </div>
      <div className="content">
        <div className="description">
          {title} by {name}
        </div>
        <div className="description">
          {width} x {height}
        </div>
      </div>
    </div>
  )
}

export default Painting
