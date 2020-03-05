import React, { Component } from 'react';
import request from 'superagent';

export default class RandomPalette extends Component {
    state = {
        paletteName: ''
    }    

    savePalette = async (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        const myPalette = {
            paletteName: this.state.paletteName,
            dmcOne: this.props.palette[0],
            dmcTwo: this.props.palette[1],
            dmcThree: this.props.palette[2],
            dmcFour: this.props.palette[3],
            dmcFive: this.props.palette[4]
        };

        this.setState({ myPalette });
        
        const stashPalette = await request.post(`https://mighty-mesa-93390.herokuapp.com/api/username/palettes`, {
            paletteName: this.state.paletteName,
            dmcOne: this.props.palette[0],
            dmcTwo: this.props.palette[1],
            dmcThree: this.props.palette[2],
            dmcFour: this.props.palette[3],
            dmcFive: this.props.palette[4]
        }).set('Authorization', user.token);
    }

    // map over results of that function and return a div with background color of each color

    render() {
        return (
            <div>
                <div className="paletteContainer">
                    <input placeholder="Name Your Palette" onChange={(e) => this.setState({ paletteName: e.target.value })} />
                    {/* double check how to call "hex" below */}
                    <div className="palette">
                        {/* <div className="paletteColor" style={{backgroundColor: `#${hex}`}}></div>
                        <div className="paletteColor" style={{backgroundColor: `#${hex}`}}></div>
                        <div className="paletteColor" style={{backgroundColor: `#${hex}`}}></div>
                        <div className="paletteColor" style={{backgroundColor: `#${hex}`}}></div>
                        <div className="paletteColor" style={{backgroundColor: `#${hex}`}}></div> */}
                    </div>
                    <button onClick={this.savePalette}>Save Palette to Stash</button>
                </div>
            </div>
        )
    }
}
