import React, { Component } from 'react';
import request from 'superagent';
import Floss from './Floss.js';
import Nav from './Nav.js';
import Header from './Header.js';


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
        const header = "My Palettes";
        return(
            <div className="componentContainer">
                <Header header={header} />
                <Nav />
                <div className="palettesContainer">
                {
                    this.state.savedPalettes.map(savedPalette => 
                        <div className="paletteContainer">
                            <h2>{savedPalette.palette_name}</h2>
                            <div className="palette">
                                {/* <Floss floss={JSON.parse(savedPalette.dmc_one)} />
                                <Floss floss={JSON.parse(savedPalette.dmc_two)} />
                                <Floss floss={JSON.parse(savedPalette.dmc_three)} />
                                <Floss floss={JSON.parse(savedPalette.dmc_four)} />
                                <Floss floss={JSON.parse(savedPalette.dmc_five)} /> */}
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