import React, { Component } from 'react'
import List from './List.js';
import request from 'superagent'
import Nav from './Nav.js';
import Header from './Header.js';

export default class Stash extends Component {
state = {
    stashed: []
}

    async componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));

        // go get the user's stashed flosses from the database and authorize the user to get their flosses
        const data = await request.get(`https://mighty-mesa-93390.herokuapp.com/api/username/stash`).set('Authorization', user.token);

        console.log('data:', data);

        this.setState({
            stashed: data.body
        })
    }

    deleteFlossFromState = (e) => {
        e.preventDefault();

        const flossToDelete = e.target.value;
        const stash = [...this.state.stashed];
        stash.splice(stash.findIndex(floss => {
            return floss.id === flossToDelete
        }), 1)

        this.setState({
            stashed: stash
        })
    }

    render() {
        return (
            <div className="componentContainer">
                <Header />
                <Nav />
                <List flosses={this.state.stashed} deleteFlossFromState={this.deleteFlossFromState} /> 
            </div>
        )
    }}