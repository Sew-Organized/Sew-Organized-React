import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import SignUp from './SignUp.js';
import LogIn from './LogIn.js';
import About from './About.js';

export default class Splash extends Component {
    render() {
        return (
            <div>
                <Link to={'/signUp/'}>
                    <SignUp />
                </Link>
                <Link to={'/logIn/'} >
                    <LogIn />
                </Link>
                <Link to={'/About/'}>
                    <About />
                </Link>
            </div>
        )
    }
}
