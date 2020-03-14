import React, { Component } from 'react';
import List from './List.js';
import request from 'superagent';
import Nav from './Nav.js';
import Header from './Header.js'
import SearchBar from './SearchBar';

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

    handleIdChange = (event) => {
        this.setState({
            searchQueryId: event.target.value
        })
    }

    handleNameChange = (event) => {
        this.setState({
            searchQueryName: event.target.value
        })
    }

    handleIdSearch = async (event) => {
        event.preventDefault();
        const data = await request.get(`https://mighty-mesa-93390.herokuapp.com/api/colors/search?id=${this.state.searchQueryId}`);
        console.log(data.body);

        this.setState({
            flosses: data.body
        })
    }

    handleNameSearch = async (event) => {
        event.preventDefault();
        const data = await request.get(`https://mighty-mesa-93390.herokuapp.com/api/colors/namesearch?name=${this.state.searchQueryName}`);
        console.log(data.body);

        this.setState({
            flosses: data.body
        })
    }

        render() {
            const header = "All Colors";

        return (  
            <div className="componentContainer">
                <Header header={header} />
                <Nav />
                <SearchBar handleIdChange={this.handleIdChange} handleIdSearch={this.handleIdSearch} handleNameChange={this.handleNameChange} handleNameSearch={this.handleNameSearch} />
                <List handleClick={this.setStash} flosses={this.state.flosses} stashedFlosses={this.state.stashed} />
            </div>
        )
    }
}
