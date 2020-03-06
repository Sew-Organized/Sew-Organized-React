import React, { Component } from 'react';
import RandomPalette from './RandomPalette.js';
import request from 'superagent';
import Nav from './Nav.js';
import Header from './Header.js';

export default class Palettes extends Component {
    state = {
        palettes: [],
        randomPalette: [],
        dmcData: [],
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

    // generates five random colors from color api, converts to nearest DMC colors, and changes format of data
    generateApiColors = async () => {
        const randomPalette = await request.get(`https://mighty-mesa-93390.herokuapp.com/api/scheme`);
        this.setState({ randomPalette: randomPalette.body });
        this.dmcMatches();
    };

    // takes full DMC color object array and transforms into array of arrays
    transformPaletteData = () => {
        // turns dmc colors data into arrays for compatibility reasons
        const dmcColorList = this.state.dmcData.map(color => Object.values(color));
        return dmcColorList;
    };

    // take the array of objects returned by generateApiColors
    dmcMatches = () => {
        const matchedDMCIds = this.state.randomPalette.map(object => {
            return this.matchDMC(object.r, object.g, object.b) 
        })
        const matchedDMCObjects = matchedDMCIds.map(id => {
            return this.findById(this.state.dmcData, id);
        })
        this.setState({ matchedDMCObjects });
    }

    // does color math, and is called in matchDMC
    distanceFromColor(idx, r, g, b) {
        const dmcColorList = this.transformPaletteData();
        const tr = dmcColorList[idx][2];
        const tg = dmcColorList[idx][3];
        const tb = dmcColorList[idx][4];
        const baseDistance = ((r - tr) * (r - tr)) + ((g - tg) * (g - tg)) + ((b - tb) * (b - tb));
        const distance = Math.sqrt(baseDistance);
        return distance;
    }

    // where the magic happens
    matchDMC = (rgbRed, rgbGreen, rgbBlue) => {
        const dmcColorList = this.transformPaletteData();
        const distanceList = [];
        for (let i = 0; i < dmcColorList.length; i++) {
            const candidateDist = this.distanceFromColor(i, rgbRed, rgbGreen, rgbBlue);
            distanceList[i] = [candidateDist, i];
        }
        // sort the list in ascending order
        distanceList.sort(function(a, b){return a[0]-b[0]});
        // Get the values that are closest to the RGB value
        const dmcI = dmcColorList[distanceList[0][1]][0];
        // const dmcR = dmcColorList[distanceList[0][1]][2];
        // const dmcG = dmcColorList[distanceList[0][1]][3];
        // const dmcB = dmcColorList[distanceList[0][1]][4];
        return dmcI;
    }

    findById = (array, id) => {
        for (let index = 0; index < array.length; index++) {
            const item = array[index];
            if (item.id === id) {
                return item;
            } 
        }
    };

    render() {
        return (
            <div>
                <Header />
                <Nav />
                <p>Looking for color inspiration? Click the button to generate a palette of floss colors to spark your next project idea.</p>
                <button onClick={this.generateApiColors}>Generate Color Palette</button>
                <div>
                    { this.state.matchedDMCObjects 
                    ? 
                    <div>
                        <RandomPalette palette={this.state.matchedDMCObjects} />
                    </div>
                    : '' }
                </div>
            </div>
        )
    }
}
