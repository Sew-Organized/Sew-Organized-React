import React, { Component } from 'react';
import request from 'superagent';
import Floss from './Floss.js';
import Nav from './Nav.js';
import RandomPalette from './RandomPalette';


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

    // delete user's palettes
    handleDeleteFromPalettes = async (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        const paletteToDelete = e.target.value;
        const palettes = [...this.state.savedPalettes];
        palettes.splice(palettes.findIndex(palette => {
            return palette.id === paletteToDelete
        }), 1)
        this.setState({
            savedPalettes: palettes
        })
        const deletedFromStash = await request.delete(`https://mighty-mesa-93390.herokuapp.com/api/username/palettes/${paletteToDelete}`)
            .set('Authorization', user.token);
        };

    render() {
        return(
            <div>
                <Nav />
                <h1>Saved palettes</h1>
                <div className="paletteContainer">
                {
                    this.state.savedPalettes.map(savedPalette => 
                        <div className="palette">
                            <h2>{savedPalette.palette_name}</h2>
                            <Floss floss={JSON.parse(savedPalette.dmc_one)} />
                            <Floss floss={JSON.parse(savedPalette.dmc_two)} />
                            <Floss floss={JSON.parse(savedPalette.dmc_three)} />
                            <Floss floss={JSON.parse(savedPalette.dmc_four)} />
                            <Floss floss={JSON.parse(savedPalette.dmc_five)} />
                            <button value={savedPalette.id} onClick={ this.handleDeleteFromPalettes }>Remove</button>
                        </div>
                    )
                }
                </div>
            </div>
        )
    }
}