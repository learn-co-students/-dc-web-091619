import React, { Fragment } from 'react'

const Sushi = (props) => {

  let getImage = (url) => {
    let newUrl
    if (url.includes("imgur")) {
      newUrl = require('../assets/RJGr3Xs.png')
    } else {
      newUrl = require(`../assets/sushi-slice_${url.split("_")[1]}`)
    }
    return newUrl
  }

  const {id, img_url, name, price} = props.sushiObj

  
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.eatenSushis(props.sushiObj)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.orderedSushis.includes(props.sushiObj) ?
            null
          :
         
            <img src={getImage(img_url)} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi