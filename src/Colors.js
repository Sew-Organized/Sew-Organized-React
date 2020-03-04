import React, { Component } from 'react';
// import SearchBar from './SearchBar.js';
import List from './List.js';
// import Paging from './Paging.js';
import request from 'superagent';

export default class Colors extends Component {
    // state for the array of flosses to be posted to page
    state = {
        flosses: [],
    }

    async componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        // put in api request link for rendering data
        const data = await request.get(`https://mighty-mesa-93390.herokuapp.com/api/colors
        `).set('Authorization', user.token);
        console.log('data:', data);
        // double check data format that sets state
        this.setState({ flosses: data.body })
    }
    
    render() {
        console.log('state:', this.state);
        return (
            <div>
                {/* <SearchBar /> */}
                <List flosses={this.state.flosses} />
                {/* <Paging /> */}
            </div>
        )
    }
}
