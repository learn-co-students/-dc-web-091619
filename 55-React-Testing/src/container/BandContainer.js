import React from 'react';
import Band from '../components/Band';

const Bands = props => {

  console.log(props)

  return (
    <div>
      { props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand}/>)}
   </div>
  );

};

export default Bands;