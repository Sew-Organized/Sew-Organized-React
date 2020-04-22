import React, { Component } from 'react'
import request from 'superagent';
import './SignUp.css'; 

export default class SignUp extends Component {
    state = {
        email: '',
        password: '',
        displayName: '',
    }
    
    handleSignUp = (e) => {
        e.preventDefault();
        request.post(`https://mighty-mesa-93390.herokuapp.com/api/auth/signup`, {
            email: this.state.email,
            password: this.state.password,
            displayName: this.state.displayName
        })
        .then(response => {
                localStorage.setItem('user', JSON.stringify(response.body));
                this.props.history.push('/colors')
        })
        .catch(err => this.setState({error: err.response.body.error}) 
        );
    }

    render() {
        return (
            <div className='signUpDiv'>
                <h3>Create an Account:</h3>
                { this.state.error ? <h3 class="error">{this.state.error}</h3> : null }
                <form>
                    <input 
                        type='username'
                        placeholder='username'
                        value={ this.state.displayName } 
                        onChange={(e) => this.setState({ displayName: e.target.value})} />
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
                    <button className="primarySignUpButton" onClick={ this.handleSignUp }>Sign up</button>
                </form>
            </div>
        )
    }
}