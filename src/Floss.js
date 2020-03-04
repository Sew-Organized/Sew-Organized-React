import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Floss extends Component {
    render() {
        const { floss } = this.props;
        const {
            description,
            id,
            hex, 
        } = floss;
        console.log(hex);
        return (
            <div>
                <li className='flossBox'>
                    <Link to={`Detail/${floss.id}`}>
                    <h3>{ description }</h3>
                        </Link>
                    <h3>{ id }</h3>
                    <div>
                        <div className='hexContainer' style={{backgroundColor: `#${hex}`, border: `#${hex}`}}></div> 
                    </div>
{/* Write a function to post api/username/stash/id to update quantity*/}
                    <label for='owned'>Skeins Owned: </label>
                    <select id='owned'>
{/* Write a function to remove from stash if value=0 */}
                        <option value='0'> 0 </option>
                        <option value='0.5'> 0.5 </option>
                        <option value='1'> 1 </option>
                        <option value='1.5'> 1.5 </option>
                        <option value='2'> 2 </option>
                        <option value='2.5'> 2.5 </option>
                        <option value='3'> 3 </option>
                        <option value='.5'> 3.5 </option>
                        <option value='4'> 4 </option>
                        <option value='4.5'> 4.5 </option>
                        <option value='5'> 5 </option>
                        <option value='6'> 5+ </option>
                    </select>

                </li>
            </div>
        )
    }
}

