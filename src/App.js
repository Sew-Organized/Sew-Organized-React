import React, { Component } from 'react'
import { 
  Route, 
  Switch, 
  Redirect,
  BrowserRouter as Router, } from 'react-router-dom';
import './App.css';
import About from './About.js';
import Stash from './Stash.js';
import Splash from './Splash.js';
import SignUp from './SignUp.js';
import LogIn from './LogIn.js';
import Colors from './Colors.js';
import Palettes from './Palettes.js';
import SavedPalettes from './SavedPalettes.js';
import Detail from './Detail.js';

const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));

export default class App extends Component {
  render() {
    return (
      <div>
        
        <Router>
          <Switch>
            <Route exact path='/' render={() => 
              isLoggedIn()
                ? <Redirect to='/stash' />
                : <Redirect to='/splash' />
            } />
            <Route exact path='/splash' component={Splash} />
            <Route exact path='/about' component={About} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/login' component={LogIn} />
            <Route exact path='/colors' component={Colors} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path='/stash' component={Stash} />
            <Route exact path='/mypalettes' component={SavedPalettes} />
            <Route exact path='/palettes' component={Palettes} />
          </Switch>
        </Router>
      </div>
    )
  }
}
