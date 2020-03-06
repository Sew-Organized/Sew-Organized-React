import React, { Component } from 'react'
import { getFloss } from './services/API.js';
import Floss from './Floss.js';
import request from 'superagent';
import Nav from './Nav.js';
import Header from './Header.js';
// import RandomPalette from 'RandomPalette.js';

export default class Detail extends Component {
        state = {
            floss: {},
        };

    async componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));

        const data = await (await getFloss(this.props.match.params.id, user));
        if (data.body) {
            console.log('data.body:', data.body);
            this.setState({ floss: data.body[0] })
            console.log('state', this.state.floss);
        }
        const dmcData = await request.get(`https://mighty-mesa-93390.herokuapp.com/api/colors`)

        // double check data format that sets state
        this.setState({ dmcData: dmcData.body })
    }

    render() {
        return (
            <div>
                <Header />
                <Nav />
                {/* <h1>{ this.state.floss.description }</h1> */}
                <div>
                    { this.state.floss 
                    ? 
                    <div>
                        <Floss floss={ this.state.floss } />
                    </div>
                    : '' }
                </div>
                {/* <ul className='flossDetailContainer'>
                    <Floss floss={ this.state.floss[0] } />
                </ul> */}
            </div>
        )
    }
}