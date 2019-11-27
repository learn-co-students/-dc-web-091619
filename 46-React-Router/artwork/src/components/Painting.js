import React from 'react'
import {Link} from 'react-router-dom'

const Painting = ({painting, onSelectPainting}) => {
  console.log(painting.slug)
  return(
    <div className="ui card">
      <div>
        <img src={painting.image} alt={painting.title}/>
        <div>
          {painting.title}
        </div>
      </div>
      <Link to={`/paintings/${painting.slug}`}>
        <button>More Info</button>
      </Link>
    </div>
  )
}

export default Painting
