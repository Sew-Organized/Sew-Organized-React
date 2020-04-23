import React, { Component } from 'react';
import List from './List.js';
import Nav from './Nav.js';
import Header from './Header.js'
import SearchBar from './SearchBar';
import { getColors, getUserStash, getColorById, getColorsByName } from './utils/API-services';
import ResponsiveDrawer from './Drawer.js';

export default class Colors extends Component {
    // state for the array of flosses to be posted to page
    state = {
        flosses: [],
        stashed: [],
    }

    async componentDidMount() {
        const data = await getColors();        
        const stashedData = await getUserStash();
        
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
        const data = await getColorById(this.state.searchQueryId);

        this.setState({
            flosses: data.body
        })
    }

    handleNameSearch = async (event) => {
        event.preventDefault();
        const data = await getColorsByName(this.state.searchQueryName);

        this.setState({
            flosses: data.body
        })
    }

        render() {
            const header = "All Colors";

        return (  
            <div className="componentContainer">
                <Header header={header} />
                <ResponsiveDrawer />
                <Nav />
                <SearchBar handleIdChange={this.handleIdChange} handleIdSearch={this.handleIdSearch} handleNameChange={this.handleNameChange} handleNameSearch={this.handleNameSearch} />
                <List handleClick={this.setStash} flosses={this.state.flosses} stashedFlosses={this.state.stashed} />
            </div>
        )
    }
}
