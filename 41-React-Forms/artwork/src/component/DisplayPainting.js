import React from 'react'

//container components tend to be classes
//presentation components then to be funtional

//we put the state of currentPainting in here???



const DisplayPainting = (props) => {
  // console.log("inside DisplayPainting:", props)
  return props.painting ? (<div className="ui card">
        <div>
          <img alt={props.painting.title} src={props.painting.image} />
        </div>
        <p>{`${props.painting.title} by ${props.painting.artist.name}`}</p>
        <p>{`${props.painting.dimensions.height} x ${props.painting.dimensions.width}`}</p>
      </div>) : null
}

export default DisplayPainting
