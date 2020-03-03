import React, { Component } from 'react'
import request from 'superagent';

export default class SignUp extends Component {
    state = {
        email: '',
        password: '',
        username: ''
    }
    
    handleSignUp = async () => {
        const signUp = await request.post(`https://mighty-mesa-93390.herokuapp.com/api/auth/signup`, {
            email: this.state.email,
            password: this.state.password,
        })
    
        localStorage.setItem('user', JSON.stringify(signUp.body));
        this.props.history.push('/colors')
    }
    render() {
        return (
            <div>
            <h3>Create an account:</h3>
            <h4>Enter your username:</h4>
                    <input 
                        value={ this.state.username } 
                        onChange={(e) => this.setState({ username: e.target.value})} />
            <h4>Enter your email:</h4>
            <input 
                value={ this.state.emailSignUp } 
                onChange={(e) => this.setState({ emailSignUp: e.target.value})} />
            <h4>Enter your password:</h4>
            <input 
                value={ this.state.passwordSignUp } 
                onChange={(e) => this.setState({ passwordSignUp: e.target.value})} /><br />
            <button onClick={ this.handleSignUp }>Sign up</button>  
        </div>
        )
    }
}