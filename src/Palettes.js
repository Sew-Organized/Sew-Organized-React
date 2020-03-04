import React, { Component } from 'react';
import RandomPalette from './RandomPalette.js';
import request from 'superagent';

export default class Palettes extends Component {
    state = {
        palettes: [],
        randomPalette: [],
        dmcData: []
    };

// Fetches data for user's saved palettes and all dmc data, sets in state
    async componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        // put in api request link for rendering data
        const palettesData = await request.get(`https://mighty-mesa-93390.herokuapp.com/api/username/palettes
        `).set('Authorization', user.token);

        const dmcData = await request.get(`https://mighty-mesa-93390.herokuapp.com/api/colors`)

        // double check data format that sets state
        this.setState({ palettes: palettesData.body, dmcData: dmcData.body })
    }

    generateApiColors = async () => {
        const randomPalette = await request.get(`https://mighty-mesa-93390.herokuapp.com/api/scheme`);

        this.setState({ randomPalette: randomPalette.body })
        console.log(this.state);
    };

    

    // handleInput();

    // savePalette();

// function to match the returned colors to DMC ids
// map over results of that function and return a div with background color of each color

    render() {
        return (
            <div>
                <p>Looking for color inspiration? Click the button to generate a palette of floss colors to spark your next project idea.</p>
                <button onClick={this.generateApiColors}>Generate Color Palette</button>
                <div>
                    {
                        <RandomPalette
                            palette={this.state.randomPalette} />
                    }
                </div>
            </div>
        )
    }
}
