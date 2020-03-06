import React, { Component } from 'react';
import Floss from './Floss.js';

export default class RandomPalette extends Component {
    // state = {
    //     paletteName: ''
    // }    

    render() {
        console.log(this.props);
        return (
            <div className="componentContainer">
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