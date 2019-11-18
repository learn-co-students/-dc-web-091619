import React from 'react';
import '../App.css';
import Header from './Header'
import PaintingsContainer from './PaintingsContainer'

function App() {
  return (
    <div className="App">
      <Header color="pink" icon="bullhorn"/>
      <PaintingsContainer />
    </div>
  );
}

export default App;
