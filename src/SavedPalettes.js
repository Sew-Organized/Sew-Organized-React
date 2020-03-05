import React, { Component } from 'react';
import request from 'superagent';
import Floss from './Floss.js';
import RandomPalette from './RandomPalette';
// import UserPalette from './UserPalette.js';


export default class SavedPalettes extends Component {
    state = {
        savedPalettes: [],
        paletteNames: []
    }

    // fetch user's saved palettes and store in local state
    componentDidMount = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const savedPalettesData = await request.get(`https://mighty-mesa-93390.herokuapp.com/api/username/palettes`).set('Authorization', user.token);
        this.setState({ savedPalettes: savedPalettesData.body });
    }

    render() {
        // const savedPaletteArray = this.state.savedPalettes.map(palette => {
        //     return [palette.dmc_one, palette.dmc_two, palette.dmc_three, palette.dmc_four, palette.dmc_five];
        // });
        return(
            <div>
                <h1>Saved palettes</h1>
                <div className="paletteContainer">
                {
                    // iterate over savedPalettes and return an array of arrays

                    // iterate over the returned array of arrays savedPalettes and for each palette array, show name and render a RandomPalette component
                    this.state.savedPalettes.map(savedPalette => 
                        <div className="palette">
                            { console.log('savedPalette in map', savedPalette) }
                            <h2>{savedPalette.palette_name}</h2>
                            <Floss floss={JSON.parse(savedPalette.dmc_one)} />
                            <Floss floss={JSON.parse(savedPalette.dmc_two)} />
                            <Floss floss={JSON.parse(savedPalette.dmc_three)} />
                            <Floss floss={JSON.parse(savedPalette.dmc_four)} />
                            <Floss floss={JSON.parse(savedPalette.dmc_five)} />
                            <button>Remove</button>
                        </div>
                    )
                }
                </div>
            </div>
        )
    }
}