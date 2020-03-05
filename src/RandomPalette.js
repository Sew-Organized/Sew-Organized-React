import React, { Component } from 'react';

export default class RandomPalette extends Component {
    // handleInput();

    // savePalette();

    // map over results of that function and return a div with background color of each color


    render() {
        return (
            <div>
                <div className="paletteContainer">
                    <input placeholder="Name Your Palette" onChange={this.handleInput} />
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
