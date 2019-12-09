import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import store from './redux/store'
import {Provider} from 'react-redux'
import App from './components/App'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


// const withBlue = (SimpleComponent) => {
//   class X extends Component{
//     render(){
//       return <SimpleComponent color="blue" />
//     }
//   }
//   return X
// } //this is a function
//
// const BlueHeader = withBlue(Header) //pass in simple component
// const RouterHeader = withRouter(Header)
