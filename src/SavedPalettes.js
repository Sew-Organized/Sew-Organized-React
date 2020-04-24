import React, { Component } from 'react';
import Floss from './Floss.js';
import Nav from './Nav.js';
import Header from './Header.js';
import ResponsiveDrawer from './Drawer.js';
import { getPalettes } from './utils/API-services.js';
import './SavedPalettes.css';

export default class SavedPalettes extends Component {
    state = {
        savedPalettes: [],
        paletteNames: []
    }

    // fetch user's saved palettes and store in local state
    componentDidMount = async () => {
        const savedPalettesData = await getPalettes();
        this.setState({ savedPalettes: savedPalettesData.body });
    }

    render() {
        const header = "My Palettes";
        return(
            <div className="componentContainer">
                <Header header={header} />
                <ResponsiveDrawer />
                <Nav />
                <div className="palettesContainer">
                {
                    this.state.savedPalettes.map(savedPalette => 
                        <div className="paletteContainer">
                            <h2>{savedPalette.palette_name}</h2>
                            <div className="palette">
                                {
                                    [
                                        'dmc_one',
                                        'dmc_two',
                                        'dmc_three',
                                        'dmc_four',
                                        'dmc_five'
                                    ].map(key => <Floss floss={JSON.parse(savedPalette[key])} />)
                                }
                            </div>
                        </div>
                    )
                }
                </div>
            </div>
        )
    }
}