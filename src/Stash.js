import React, { Component } from 'react'
import List from './List.js';
import Nav from './Nav.js';
import Header from './Header.js';
import { getUserStash } from './utils/API-services.js';

export default class Stash extends Component {
state = {
    stashed: []
}

    async componentDidMount() {
        const data = await getUserStash();
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
        const header = "My Stash";
        return (
            <div className="componentContainer">
                <Header header={header} />
                <Nav />
                <List flosses={this.state.stashed} deleteFlossFromState={this.deleteFlossFromState} /> 
            </div>
        )
    }}