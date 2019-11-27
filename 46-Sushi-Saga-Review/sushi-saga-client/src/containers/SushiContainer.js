import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {


  return (
    
      <div className="belt">
        {
        props.currentSushis.map(sushi => {
          <Sushi 
            orderedSushis={props.orderedSushis} 
            eatenSushis={props.eatenSushis} 
            sushiObj={sushi} 
            />
        })
        }
        <MoreButton nextFour={props.nextFour} />
      </div>
  
  )
}

export default SushiContainer