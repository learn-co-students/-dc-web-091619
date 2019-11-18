import React from 'react'
import Painting from './Painting'
import paintingsData from '../data/paintings'
//import this array as a variable called paintingsData

//functional components just need to return some JSX
const PaintingsContainer = () => {
  return (
    <div>
      {
        paintingsData.map(  x => <Painting key={x.id} paintingObj={x}  />
      )
      }
    </div>
  )
}

export default PaintingsContainer
