import React from 'react'
import {Link, Route} from 'react-router-dom'

const PaintingDetails = (props) => {
  let {painting} = props
  return painting ?
    <div className="ui card">
      <Route exact path="/paintings/:slug/easter-egg" render={()=><div>Hi</div>}/>
      <div>
        <img src={painting.image} alt={painting.title}/>
        <h3>
          {painting.title}
        </h3>
        <div>{`Artist: ${painting.artist.name}`}</div>
        <div>{`Born: ${painting.artist.birthday}`}</div>
        <div>{`Died: ${painting.artist.deathday}`}</div>
        <div>{`Date: ${painting.date}`}</div>
        <div>
          {`Dimensions: ${painting.dimensions.width} in. x ${painting.dimensions.height} in.`}
        </div>
      </div>
      <Link to="/paintings">
        <button>Back to Gallery</button>
      </Link>
    </div>
    :
    null
}

export default PaintingDetails
