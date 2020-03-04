import React, { Component } from 'react';
import request from 'superagent';

export default class RandomPalette extends Component {

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
