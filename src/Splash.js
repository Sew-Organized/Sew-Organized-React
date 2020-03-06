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
                    <h1 className="splash">Sew Organized</h1>
          
                    <p className="splash">Do your craft supplies look like this? 
                    <br />
                    Are you looking for a better solution for your embroidery floss needs?</p>

                    <button className="splash" id='signUpButton' onClick={this.handleSignUp}>Sign up Now!</button>

                    <button className="splash"
                    id='signInButton' onClick={this.handleSignIn}>Sign In</button>
                </main>
            </div>
        )
    }
}
