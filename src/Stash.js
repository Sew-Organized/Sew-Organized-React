import React, { Component } from 'react'
import List from 'react'
import request from 'superagent'

export default class Stash extends Component {
    state = {
        flosses: [],
    }

    async componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        // put in api request link for rendering data
        const data = await request.get(`https://mighty-mesa-93390.herokuapp.com/api/username/stash
        `).set('Authorization', user.token);
        console.log('data:', data);
        // double check data format that sets state
        this.setState({ flosses: data.body })
    }
    render() {
        return (
            <div>
                <List flosses={this.state.flosses} />
            </div>
        )
    }
}
