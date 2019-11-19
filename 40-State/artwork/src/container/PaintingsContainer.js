import React, {Component} from 'react'
import Painting from '../component/Painting'
import paintingsData from '../data/paintings'
import DisplayPainting from '../component/DisplayPainting'

class PaintingsContainer extends Component{
  constructor(){
    super()
    this.state = {
      currentPainting: paintingsData[0]
    }
  }

  //state chaing callback function
  changeCurrentPainting = (paintingObj, event) => {
    // let id = event.currentTarget.dataset.paintingId
    this.setState({currentPainting: paintingObj})
    console.log("WE ARE UPDATING STATE")
    //update the state of currentTarget with the new painting
  }

  render(){
    //this is our PaintingsContainer
    return (
      <div>
        <DisplayPainting
          painting={this.state.currentPainting}
        />
        {paintingsData.map(painting =>
          <Painting
            key={painting.id}
            paintingObj={painting}
            changePainting={this.changeCurrentPainting}
          />)}
      </div>
    )
  }
}

export default PaintingsContainer
/*
{paintingsData.map(painting =>
  <Painting
    key={painting.id}
    paintingObj={painting}
  />)}

  generating:
<Painting key=? paintingObj=blah changePainting={f()}/>
<Painting key=? paintingObj=blah changePainting={f()}/>
<Painting key=? paintingObj=blah changePainting={f()}/>
<Painting key=? paintingObj=blah changePainting={f()}/>
<Painting key=? paintingObj=blah changePainting={f()}/>
<Painting key=? paintingObj=blah changePainting={f()}/>

*/
