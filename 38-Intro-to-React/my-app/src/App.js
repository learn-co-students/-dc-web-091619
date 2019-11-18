import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComB from './CommentBox'

//create a class component
class App extends React.Component {
  render(){
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              React
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <ComB />
        </div>
      );
  }
}

export default App;
