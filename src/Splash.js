import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Splash.css';


export default class Splash extends Component {
    render() {

        return (
            <div>
                <section className='splashLinks'>
                    <Link to="/signup"> Sign Up </Link>
                    <Link to="/logIn"> Log In </Link>
                    <Link to="/about"> About the Developers </Link>
                </section>

                <p>This is a paragraph with a little about our app and what it does! Lacrimosa
Dies illa Qua resurget Ex favilla Judicandus Homo reus Lacrimosa Dies illa Qua resurget Ex favilla Judicandus Homo eus Huic ergo Parce deus Pie Jesu Jesu Domine Dona eis Requiem Dona eis Dona eis Requiem Amen</p>
            </div>
        )
    }
}
