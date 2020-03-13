import React, { Component } from 'react'
import request from 'superagent';
import './LogIn.css';


export default class LogIn extends Component {
    state = {
        email: '',
        password: '',
        username: ''
    }
    
    handleLogIn = async (e) => {
        e.preventDefault();
        const logIn = await request.post(`https://mighty-mesa-93390.herokuapp.com/api/auth/login`, {
            email: this.state.email,
            password: this.state.password,
            username: this.state.username
        })
    
        localStorage.setItem('user', JSON.stringify(logIn.body));
        this.props.history.push('/stash')
    }
    render() {
        return (
            <div className='logInDiv'>
                <form>
                    <h3>Log In:</h3>
                    <input 
                        type='username'
                        placeholder='username'
                        value={ this.state.username } 
                        onChange={(e) => this.setState({ username: e.target.value})} />
                    <p></p>
                    <input 
                        type='email'
                        placeholder='example@email.com'
                        value={ this.state.email } 
                        onChange={(e) => this.setState({ email: e.target.value})} />
                    <p></p>
                    <input 
                        type='password'
                        placeholder='password'
                        value={ this.state.password } 
                        onChange={(e) => this.setState({ password: e.target.value})} /><br />
                    <button onClick={this.handleLogIn } className="primarySignUpButton">Log in</button>   
                </form>
            </div>
        )
    }
}