import React, { Component } from 'react';
import List from './List.js';
import request from 'superagent';
import Nav from './Nav.js';
import Header from './Header.js'

export default class Colors extends Component {
    // state for the array of flosses to be posted to page
    state = {
        flosses: [],
        stashed: [],
    }

    async componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        const data = await request.get(`https://mighty-mesa-93390.herokuapp.com/api/colors`).set('Authorization', user.token);
        
        const stashedData = await request.get(`https://mighty-mesa-93390.herokuapp.com/api/username/stash`).set('Authorization', user.token);
        
        this.setState({ 
            flosses: data.body, 
            stashed: stashedData.body })
    }

    setStash = (flossObject) => {
        this.setState({ stashed: [...this.state.stashed, flossObject] })
    }
        render() {
            const header = "All Colors";

        return (  
            <div className="componentContainer">
                <Header header={header} />
                <Nav />
                <List handleClick={this.setStash} flosses={this.state.flosses} stashedFlosses={this.state.stashed} />
            </div>
        )
    }
}
