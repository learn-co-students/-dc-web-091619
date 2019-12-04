import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Profile from './components/profile'
import LoginForm from './components/loginForm'
import Nav from './components/nav'
import NotFound from './components/notFound'
import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {currentUser: null}
  }

  componentDidMount(){
    if(localStorage.getItem("jwt")){
      fetch('http://localhost:3000/api/v1/profile', {
        headers: {
          "Authorization" : localStorage.getItem('jwt')
        }
      })
      .then(res => res.json())
      .then(user => {
        this.updateUser(user)
      })
    }
  }

  updateUser = (user) => {
    this.setState({currentUser: user})
  }

  render(){
    return (
      <Fragment>
        <Nav user={this.state.currentUser} updateUser={this.updateUser}/>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path="/profile" render={() => {
            return this.state.currentUser ? <Profile {...this.state.currentUser}/> : <Redirect to="login"/>
          }}/>
          <Route exact path="/login" render={() => {
            return this.state.currentUser ? <Redirect to="/profile" /> : <LoginForm updateUser={this.updateUser}/>
          }} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    )
  }
}

export default withRouter(App)
