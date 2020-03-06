import React, { Component } from 'react'
import request from 'superagent';
import './SignUp.css'; 

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
            <div className='signUpDiv'>
            <h3>Create an Account:</h3>
            <form>
                        <input 
                            type='username'
                            placeholder='username'
                            value={ this.state.displayName } 
                            onChange={(e) => this.setState({ displayName: e.target.value})} />
                        {console.log(this.state)}
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
                <button className="primary signUpButton" onClick={ this.handleSignUp }>Sign up</button>
            </form>
        </div>
        )
    }
}