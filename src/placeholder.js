



import React, { Component } from 'react';
import request from 'superagent';
// import Floss from './Floss.js';
import RandomPalette from './RandomPalette';
import UserPalette from './UserPalette.js';


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
        // map over all saved palettes and return a div containing the palette name and the data for each color
        const savedPaletteArray = this.state.savedPalettes.map(palette => {
            return [palette.dmc_one, palette.dmc_two, palette.dmc_three, palette.dmc_four, palette.dmc_five];
        });

        const savedPaletteNames = this.state.savedPalettes.map(palette => {
            return palette.palette_name
        })

        return(
            <div>
                <h1>Saved palettes</h1>
                <div className="paletteContainer">
                    {
                        savedPaletteArray.map(palette => {
                            return(
                                <div>                                    
                                    <h2>{this.state.paletteName}</h2>
                                    <UserPalette palette={palette} />
                                    <button>Remove</button>
                                </div>)
                        })
                    }
                </div>
            </div>
        )
    }
}


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
//         return (
//             <div>
//                 <h1>Saved palettes</h1>
//                 <div className="paletteContainer">
//                     {/* {mappedPalettes} */}
            
//                 {
//                     // iterate over savedPalettes and return an array of arrays

//                     // iterate over the returned array of arrays savedPalettes and for each palette array, show name and render a RandomPalette component
//                     this.state.savedPalettes.map(savedPalette => 
//                         <div className="palette">
//                         { console.log('savedPalette in map', savedPalette) }
//                         { this.setState({ savedPalette }) }
//                         <h2>{savedPalette.palette_name}</h2>
//                         <RandomPalette palette={this.state.savedPalette} />
//                          {/* <Floss floss={savedPalette.dmc_one} />
//                          <Floss floss={savedPalette.dmc_two} />
//                          <Floss floss={savedPalette.dmc_three} />
//                          <Floss floss={savedPalette.dmc_four} />
//                          <Floss floss={savedPalette.dmc_five} /> */}
//                     </div>
//                     )
//             }
//                 <button>Remove</button>
//             </div>
//             </div>
//         )
//     }
// }

    // return (
    //     <div>
    //         <h1>Saved palettes</h1>
    //         <div className="paletteContainer">
    //             {/* {mappedPalettes} */}
            
    //         {
    //             // iterate over savedPalettes and return an array of arrays

    //             // iterate over the returned array of arrays savedPalettes and for each palette array, show name and render a RandomPalette component
    //             this.state.savedPalettes.map(savedPalette => 
    //                 <div className="palette">
    //                 { console.log('savedPalette in map', savedPalette) }
    //                 { this.setState({ savedPalette }) }
    //                 <h2>{savedPalette.palette_name}</h2>
    //                 <RandomPalette palette={this.state.savedPalette} />
    //                  {/* <Floss floss={savedPalette.dmc_one} />
    //                  <Floss floss={savedPalette.dmc_two} />
    //                  <Floss floss={savedPalette.dmc_three} />
    //                  <Floss floss={savedPalette.dmc_four} />
    //                  <Floss floss={savedPalette.dmc_five} /> */}
    //             </div>
    //             )
    //     }
    //         <button>Remove</button>
    //     </div>
    //     </div>
    // )