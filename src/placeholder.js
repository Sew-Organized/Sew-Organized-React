import React, { Component } from 'react'
import { getFloss } from './services/API.js';
import Floss from './Floss.js';
import request from 'superagent';
import Nav from './Nav.js';
import Header from './Header.js';
// import RandomPalette from 'RandomPalette.js';

export default class Detail extends Component {
        

    

    render() {
        return (
            <div>
                <Header />
                <Nav />
                <ul className='flossDetailContainer'>
                    <Floss floss={ this.state.floss } />
                </ul>
                
            </div>
        )
    }
}