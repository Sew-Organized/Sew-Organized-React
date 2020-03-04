import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'


export default class Floss extends Component {
    state = {
        floss: [],
    }

    handleAddStash = async (e) => {
        e.preventDefault();
        
        const myStash = {
            dmcId: this.state.floss.id,
            quantity: this.state.quantityInput
        };

        const newMyStash = [...this.state.floss, myStash];

        this.setState({ flosses: newMyStash });
    
        const stash = await request.post(`https://mighty-mesa-93390.herokuapp.com/api/username/stash`, {
            quantity: this.state.quantityInput });
    
        // maybe need to add auth 
    }

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
                <button onClick={ this.handleAddStash }>Stash</button>
                </li>
            </div>
        )
    }
}

// <input 
//     value={ this.state.email } 
//     onChange={(e) => this.setState({ email: e.target.value})} />
// <h4>Enter your password:</h4>