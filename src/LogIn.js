import React, { Component } from 'react'
import request from 'superagent';


export default class LogIn extends Component {
    state = {
        email: '',
        password: '',
        username: ''
    }
    
    handleLogIn = async () => {
        const logIn = await request.post(`https://mighty-mesa-93390.herokuapp.com/api/auth/login`, {
            email: this.state.email,
            password: this.state.password,
            username: this.state.username
        })
    
        localStorage.setItem('user', JSON.stringify(logIn.body));
        this.props.history.push('/user/stash')
    }
    render() {
        return (
            <div>
                <form>
                    <h3>Already have an account? Log In:</h3>
                    <h4>Enter your username:</h4>
                    <input 
                        value={ this.state.username } 
                        onChange={(e) => this.setState({ username: e.target.value})} />
                    <h4>Enter your email:</h4>
                    <input 
                        value={ this.state.email } 
                        onChange={(e) => this.setState({ email: e.target.value})} />
                    <h4>Enter your password:</h4>
                    <input 
                        value={ this.state.password } 
                        onChange={(e) => this.setState({ password: e.target.value})} /><br />
                    <button onClick={this.handleLogIn }>Log in</button>   
                </form>
            </div>
        )
    }
}