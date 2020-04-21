import React, { Component } from 'react';
import request from 'superagent';
import Floss from './Floss.js';
import Nav from './Nav.js';

export default class RandomPalette extends Component {
    state = {
        paletteName: ''
    }    

    savePalette = async (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        const [dmcOne, dmcTwo, dmcThree, dmcFour, dmcFive] = this.props.palette;
        
        const stashPalette = await request.post(`https://mighty-mesa-93390.herokuapp.com/api/username/palettes`, {
            paletteName: this.state.paletteName,
            dmcOne,
            dmcTwo,
            dmcThree,
            dmcFour,
            dmcFive
        }).set('Authorization', user.token);

        this.setState({ paletteName: '' });
        
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
