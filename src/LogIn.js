import React, { Component } from 'react'
import './LogIn.css';
import { logInUser, setUserInLocalStorage } from './utils/API-services';

export default class LogIn extends Component {
    state = {
        email: '',
        password: '',
        displayName: '',
    }
    
    handleLogIn = e => {
        e.preventDefault();
        logInUser(this.state.email, this.state.password, this.state.displayName)
            .then(response => {
                setUserInLocalStorage(response);
                this.props.history.push('/stash');
            })  
            .catch(err => this.setState({error: err.response.body.error})
            ); 
    }

    render() {
        return (
            <div className='logInDiv'>
                <h3>Log in to Sew Organized</h3>
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
                <button onClick={this.handleLogIn } className="primarySignUpButton">Log in</button>   
                </form>
            </div>
        )
    }
}