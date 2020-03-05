import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'


export default class Floss extends Component {
    state = {
        quantityInput: '',
    }

    //  callback that touches parent state
    handleAddStash = async (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        
        const myStash = {
            dmcId: this.props.floss.id,
            quantity: this.state.quantityInput
        };

        this.props.setStash(myStash);
        
        const stash = await request.post(`https://mighty-mesa-93390.herokuapp.com/api/username/stash`, {
            quantity: this.state.quantityInput,
            dmcId: this.props.floss.id }).set('Authorization', user.token);   
    }

    handleUpdateStash = async (e) => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem('user'));

        // const myStash = {
        //     dmcId: this.props.floss.id,
        //     quantity: this.state.quantityInput
        // };

        // this.props.setStash(myStash);

        const updateStash = await request.put(`https://mighty-mesa-93390.herokuapp.com/api/username/stash/${this.props.floss.id}`, {
            quantity: this.state.quantityInput
        }).set('Authorization', user.token); 
        
        };



    render() {
        const { floss } = this.props;
        const {
            description,
            dmc_id,
            hex, 
        } = floss;

        console.log('window location test', window.location.pathname);
        // console.log('pathname?', this.context.location.pathname)

        return (
            <div>
                <li className='flossBox'>
                    <Link to={`detail/${floss.id}`}>
                    <h3>{ description }</h3>
                        </Link>
                    <h3>{ dmc_id }</h3>
                    <div>
                        <div className='hexContainer' style={{backgroundColor: `#${hex}`, border: `#${hex}`}}></div> 
                    </div>
{/* Write a function to post api/username/stash/id to update quantity*/}
                    

                   { window.location.pathname === '/user/stash'
                   ? <label for='owned'>Skeins Owned: 
                   <select id='owned' onChange={(e) => this.setState({ quantityInput: e.target.value})}>
{/* Write a function to remove from stash if value=0 */}
                        <option value='0'> 0 </option>
                        <option value='0.5'> 0.5 </option>
                        <option value='1'> 1 </option>
                        <option value='1.5'> 1.5 </option>
                        <option value='2'> 2 </option>
                        <option value='2.5'> 2.5 </option>
                        <option value='3'> 3 </option>
                        <option value='3.5'> 3.5 </option>
                        <option value='4'> 4 </option>
                        <option value='4.5'> 4.5 </option>
                        <option value='5'> 5 </option>
                        <option value='6'> 5+ </option>
                    </select>
                    </label>
                    : <p></p>
                    }
                { window.location.pathname === '/user/stash'
                    ? <button onClick={ this.handleUpdateStash }> Update Stash</button>
                    : <button onClick={ this.handleAddStash }>Stash</button>
                }
                </li>
            </div>
        )
    }

}
    


// <input 
//     value={ this.state.email } 
//     onChange={(e) => this.setState({ email: e.target.value})} />
// <h4>Enter your password:</h4>

