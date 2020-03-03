import React, { Component } from 'react'
import { 
  Route, 
  Switch, 
  Redirect,
  BrowserRouter as Router, } from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import About from './About.js';
import Stash from './Stash.js';
import Splash from './Splash.js';
import SignUp from './SignUp.js';
import LogIn from './LogIn.js';
import List from './List.js';

const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' render={() => 
              isLoggedIn()
                ? <Stash />
                : <Redirect to='/splash' />
            } />
            <Route path='/splash' component={Splash} />
            <Route path='/about' component={About} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={LogIn} />
            <Route path='/colors' component={List} />
            <Route path='/user/stash' component={Stash} />
          </Switch>
        </Router>
      </div>
    )
  }
}
