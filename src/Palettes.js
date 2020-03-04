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

    transformPaletteData = () => {
        // turns dmc colors data into arrays for compatibility reasons
        const dmcColorList = this.state.dmcData.map(color => Object.values(color));
        console.log(dmcColorList);

        const distanceFromColor = (idx, r, g, b) => {
            const tr = dmcColorList[idx][2];
            const tg = dmcColorList[idx][3];
            const tb = dmcColorList[idx][4];
            const baseDistance = ((r - tr) * (r - tr)) + ((g - tg) * (g - tg)) + ((b - tb) * (b - tb));
            const distance = Math.sqrt(baseDistance);
            return distance;
        }
    
        const matchDMC = (rgbRed, rgbGreen, rgbBlue) => {
            const distanceList = [];
            for (let i = 0; i < dmcColorList.length; i++) {
                const candidateDist = distanceFromColor(i, rgbRed, rgbGreen, rgbBlue);
                distanceList[i] = [candidateDist, i];
            }
            // sort the list in ascending order
            distanceList.sort(function(a, b){return a[0]-b[0]});
            // Get the values that are closest to the RGB value
            const dmcI = dmcColorList[distanceList[0][1]][0];
            const dmcR = dmcColorList[distanceList[0][1]][2];
            const dmcG = dmcColorList[distanceList[0][1]][3];
            const dmcB = dmcColorList[distanceList[0][1]][4];
            return (`ID: ${dmcI}, RGB: ${dmcR}, ${dmcG}, ${dmcB}`);
        }
    };



    // handleInput();

    // savePalette();

// function to match the returned colors to DMC ids
// map over results of that function and return a div with background color of each color

    render() {
        return (
            <div>
                <button onClick={this.transformPaletteData}>TEST BUTTON</button>
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
