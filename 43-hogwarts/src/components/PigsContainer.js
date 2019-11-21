import React from 'react'
import PigTile from './PigTile'

const PigsContainer = (props) => {
  //pass each hog Object in props.pigsData
  return (
    <div className="ui cards ">
      {props.pigsData.map(  (pig)=>{return <PigTile
        key={pig.name}
        pigObject={pig}
      />}  )}
    </div>
  )
}

export default PigsContainer
