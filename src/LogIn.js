import React, { Component } from 'react'
import request from 'superagent';
import './LogIn.css';


export default class LogIn extends Component {
    state = {
        email: '',
        password: '',
        username: '',
    }
    
    handleLogIn = (e) => {
        e.preventDefault();
        request.post(`https://mighty-mesa-93390.herokuapp.com/api/auth/login`, {
            email: this.state.email,
            password: this.state.password,
            username: this.state.username
        })
        .then(response => {
            localStorage.setItem('user', JSON.stringify(response.body));
            this.props.history.push('/stash')
        })  
        .catch(err => this.setState({error: err.response.body.error})
        ); 
    }

    render() {
        return (
            <div className='logInDiv'>
                <h3>Log In:</h3>
                { this.state.error ? <h3 class="error">{this.state.error}</h3> : null }
                <form>
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