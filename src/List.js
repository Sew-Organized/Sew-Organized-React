import React, { Component } from 'react'
import request from 'superagent';
import { Link } from 'react-router-dom';
import Floss from './Floss.js';

export default class List extends Component {
    // state for the array of flosses to be posted to page
    state = {
        flosses: [],
    }

    async componentDidMount() {
        // put in api request link for rendering data
        const data = await request.get(`${this}`)
        // double check data format that sets state
        this.setState({ flosses: data.body })
    }

    render() {
        return (
            <div>
                <ul className='flossContainer'>
                { this.state.flosses.map(floss => 
                    <Link to={`Detail/${floss.id}`}>
                        <Floss floss={floss} />
                    </Link>) }
                </ul>
            </div>
        )
    }
}

//map through the flosses data so that each are perscriped a container
