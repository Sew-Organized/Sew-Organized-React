import React, { Component } from 'react';
import request from 'superagent';
import Floss from './Floss.js';

export default class RandomPalette extends Component {
    state = {
        paletteName: ''
    }    

    savePalette = async (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        
        const stashPalette = await request.post(`https://mighty-mesa-93390.herokuapp.com/api/username/palettes`, {
            paletteName: this.state.paletteName,
            dmcOne: this.props.palette[0],
            dmcTwo: this.props.palette[1],
            dmcThree: this.props.palette[2],
            dmcFour: this.props.palette[3],
            dmcFive: this.props.palette[4]
        }).set('Authorization', user.token);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <div className="paletteContainer">
                    <div className="palette">
                        { this.props.palette.map(floss => 
                        <Floss floss={floss} />
                    )}
                    </div>
                </div>
            </div>
        )
    }
}
