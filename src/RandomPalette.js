import React, { Component } from 'react';
import Floss from './Floss.js';
import Nav from './Nav.js';
import { createPalette } from './utils/API-services.js';

export default class RandomPalette extends Component {
    state = {
        paletteName: ''
    }    

    savePalette = async (e) => {
        e.preventDefault();
        await createPalette(this.state.paletteName, ...this.props.palette);
    }

    render() {
        return (
            <div className="componentContainer">
                <Nav />
                <div className="paletteContainer">
                    <div className="flexRightAlign">
                        <input placeholder="Name Your Palette" value={this.state.paletteName} onChange={(e) => this.setState({ paletteName: e.target.value })} />
                        <button className="primary" onClick={this.savePalette}>Save</button>
                    </div>
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
