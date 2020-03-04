import React, { Component } from 'react'
import request from 'superagent';

export default class SignUp extends Component {
    state = {
        email: '',
        password: '',
        displayName: ''
    }
    
    handleSignUp = async (e) => {
        e.preventDefault();
        const signUp = await request.post(`https://mighty-mesa-93390.herokuapp.com/api/auth/signup`, {
            email: this.state.email,
            password: this.state.password,
            displayName: this.state.displayName
        })
    
        localStorage.setItem('user', JSON.stringify(signUp.body));
        this.props.history.push('/colors')
    }
    render() {
        return (
            <div>
            <h3>Create an account:</h3>
            <form>
                <h4>Enter your username:</h4>
                        <input 
                            value={ this.state.displayName } 
                            onChange={(e) => this.setState({ displayName: e.target.value})} />
                        {console.log(this.state)}
                <h4>Enter your email:</h4>
                <input 
                    value={ this.state.email } 
                    onChange={(e) => this.setState({ email: e.target.value})} />
                <h4>Enter your password:</h4>
                <input 
                    value={ this.state.password } 
                    onChange={(e) => this.setState({ password: e.target.value})} /><br />
                <button onClick={ this.handleSignUp }>Sign up</button>
            </form>
        </div>
        )
    }
}