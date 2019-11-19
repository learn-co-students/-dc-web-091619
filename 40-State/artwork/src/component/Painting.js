import React from 'react'

//function changeCurrentPainting(){  }

const Painting = (props) => {
  // console.log(props)
  return (
    <div className="ui card" onClick={     (event) => props.changePainting(props.paintingObj, event)     }>
      <p>{`${props.paintingObj.title} by ${props.paintingObj.artist.name}`}</p>
    </div>
  )
}

export default Painting
