import React, { Component } from 'react'
import List from './List.js';
import request from 'superagent'

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

       

        //don't think we need to set state
        // this.setState({ flosses: data.body })}
    }

    render() {
        return (
            <div>
                <List flosses={this.state.stashed} /> 
            </div>
        )
    }}