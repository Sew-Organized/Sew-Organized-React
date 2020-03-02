import React, { Component } from 'react'
import { getFloss } from './services/API.js';
import Floss from './Floss.js';

export default class Detail extends Component {
    state = { floss: {} }

    async componentDidMount() {
        const data = await getFloss(this.props.match.params.id);
        if (data.body) {
            this.setState({ floss: data.body })
            // may be [0] (if array of objects)
        }
    }
    render() {

        return (
            <div>
                <ul className='flossDetailContainer'>
                    <Floss floss={ this.state.floss } />
                </ul>
            </div>
        )
    }
}


// color suggestions fro the color api schema here