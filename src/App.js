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
            <Route path='/About' component={About} />
            <Route />
            <Route />
            <Route />
          </Switch>.
        </Router>
      </div>
    )
  }
}
