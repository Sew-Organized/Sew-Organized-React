import React, { Component } from 'react';
import request from 'superagent';
import Floss from './Floss.js';
import RandomPalette from './RandomPalette';


export default class SavedPalettes extends Component {
    state = {
        savedPalettes: []
    }

    // fetch user's saved palettes and store in local state
    componentDidMount = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const savedPalettesData = await request.get(`https://mighty-mesa-93390.herokuapp.com/api/username/palettes`).set('Authorization', user.token);
        this.setState({ savedPalettes: savedPalettesData.body });
    }

    render() {
        // map over all saved palettes and return a div containing the palette name and the data for each color
        console.log(this.state.savedPalettes)
        // const mappedPalettes = this.state.savedPalettes.map(savedPalette => 
        //     <div>
        //         {console.log(savedPalette)}
        //         {// savedPalette is being read here}
        //         <h2>{savedPalette.paletteName}</h2>
        //         <div className="palette">
        //             {savedPalette.map(floss => 
        //                 <Floss floss={floss} />
        //             )}
        //         </div>

        //     </div>

            // )
        return (
            <div>
                <h1>Saved palettes</h1>
                <div className="paletteContainer">
                    {/* {mappedPalettes} */}
                
                {
                    // iterate over savedPalettes and for each palette, show name
                    this.state.savedPalettes.map(savedPalette => 
                    <div className="palette">
                        <h2>{savedPalette.palette_name}</h2>
                         <Floss floss={savedPalette.dmc_one} />
                         <Floss floss={savedPalette.dmc_two} />
                         <Floss floss={savedPalette.dmc_three} />
                         <Floss floss={savedPalette.dmc_four} />
                         <Floss floss={savedPalette.dmc_five} />
                    </div>
                    )
            }
                <button>Remove</button>
            </div>
            </div>
        )
    }
}