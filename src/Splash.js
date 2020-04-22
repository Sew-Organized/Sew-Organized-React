import React, { Component } from 'react'
import './App.css';
import './Splash.css';


export default class Splash extends Component {
    handleSignUp = () => {
        this.props.history.push('/signup')
    }

    handleSignIn = () => {
        this.props.history.push('/login')
    }


    render() {

        return (
            <div className="splashComponent">
                <main>
                    <h1 className="splash">Sew Organized</h1>
          
                    <p className="splash">A really witty sentence will go here once Chelsea thinks of it.</p>

                    <button className="splash" id='signUpButton' onClick={this.handleSignUp}>Sign up</button>

                    <button className="splash"
                    id='signInButton' onClick={this.handleSignIn}>Log in</button>
                </main>
            </div>
        )
    }
}
