import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Splash.css';


export default class Splash extends Component {
    handleSignUp = () => {
        this.props.history.push('/signup')
    }


    render() {

        return (
            <div>
                <header className='splashLinks'>
                    {/* <Link to="/signup"> Sign Up </Link> */}
                    <Link to="/logIn"> Log In </Link>
                    <Link to="/about"> About the Developers </Link>
                </header>

                <main id='splashContainer'>
                    <h1 id='splashHeader'>Sew Organized</h1>
            
                    <p id='splashText'>Do your craft supplies look like this? Are you looking for a better solution for your embroidery floss needs?</p>

                    <button id='splashButton' onClick={this.handleSignUp}>Sign up Now!</button>
                </main>
            </div>
        )
    }
}
