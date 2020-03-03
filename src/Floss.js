import React, { Component } from 'react'

export default class Floss extends Component {
    render() {
        const { floss } = this.props;
        const {
            description,
            id,
            hex, 
        } = floss;
        return (
            <div>
                <li className='flossBox'>
                    <h3>{ description }</h3>
                    <h3>{ id }</h3>
                    <div className='hexContainer'>
                        <div style={{backgroundColor: { hex }}}></div> 
                    </div>

                    <label for='owned'>Skeins Owned: </label>
                    <select id='owned'>
                        <option value='1'> 1 </option>
                        <option value='2'> 2 </option>
                        <option value='3'> 3 </option>
                        <option value='4'> 4 </option>
                        <option value='5'> 5 </option>
                        <option value='6'> 6+ </option>
                    </select>

                    <input type='checkbox' id='partial' value='partial'></input>
                    <label for='partial'>Partial Skein: </label>

                </li>
            </div>
        )
    }
}

//from get(route) data
// Color name
// dmc number
// image


// in state (user object)
// owned dropdown with numbers
// buy dropdown with numbers
// partial checkbox
