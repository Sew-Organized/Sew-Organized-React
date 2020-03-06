import React, { Component } from 'react'
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
            <div>
                <main>
                    <h1>Sew Organized</h1>
            
                    <p>Do your craft supplies look like this? Are you looking for a better solution for your embroidery floss needs?</p>

                    <button id='signUpButton' onClick={this.handleSignUp}>Sign up Now!</button>

                    <button id='signInButton' onClick={this.handleSignIn}>Sign In</button>
                </main>
            </div>
        )
    }
}
