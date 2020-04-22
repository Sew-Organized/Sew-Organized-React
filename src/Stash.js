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

deleteFlossFromState = (id) => {
    this.setState(state => ({
        stashed: state.stashed.filter(floss => floss.id !== id)
    }))
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