import React, { Component } from 'react'
import Footer from './Footer.js';
import './App.css';
import './Splash.css';


export default class Splash extends Component {
    componentDidMount() {
        localStorage.clear();
    }


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
                    <div className="splashDescription">
                        <p className="splash">It’s tough to keep track of your embroidery floss stash!</p>

                        <p id="splashMobile">It’s tough to keep track of your embroidery floss stash.
                        <br /> <br />We're here to help!</p>
                    
                        <p className="splash">Sew Organized is here to help you keep track of which colors you already own, and how many skeins. If you still find yourself missing the specific shade you need for your current project, we can show you the DMC colors that match most closely. We can even generate random palettes to inspire your next project.</p>
                    
                        <p className="splash">Ready to get started? Sign up below to get Sew Organized!</p>

                        <button className="splash" id='signUpButton' onClick={this.handleSignUp}>Sign up</button>

                        <button className="splash" id='signInButton' onClick={this.handleSignIn}>Log in</button>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}
