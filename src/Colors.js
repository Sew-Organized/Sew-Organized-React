import React, { Component } from 'react';
// import SearchBar from './SearchBar.js';
import List from './List.js';
// import Paging from './Paging.js';
import request from 'superagent';

export default class Colors extends Component {
    // state for the array of flosses to be posted to page
    state = {
        flosses: [],
        stashed: [],
    }

    async componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        // put in api request link for rendering data
        const data = await request.get(`https://mighty-mesa-93390.herokuapp.com/api/colors
        `).set('Authorization', user.token);
        console.log('data:', data);
        // double check data format that sets state
        const stashedData = await request.get(`https://mighty-mesa-93390.herokuapp.com/api/username/stash`).set('Authorization', user.token);
        
        this.setState({ 
            flosses: data.body, 
            stashed: stashedData.body })
    }
    //  can set state of more than one thing at a time and we need to call both all floss and favorite floss

    setStash = (flossObject) => {
        this.setState({ stashed: [...this.state.stashed, flossObject] })
        // check to see if already there, if not create a new one if so, add a new one
    }
    
    // setfavs function to be called into floss and pass as props so floss gets it


    render() {
        console.log('state:', this.state);
        return (
            <div>
                {/* <SearchBar /> */}
                <List handleClick={this.setStash} flosses={this.state.flosses} stashedFlosses={this.state.stashed} />
                {/* <Paging /> */}
            </div>
        )
    }
}
