import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import request from 'superagent'


export default withRouter(class Floss extends Component {
    state = {
        quantityInput: this.props.floss.quantity || 0,
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

        const updateStash = await request.put(`https://mighty-mesa-93390.herokuapp.com/api/username/stash/${this.props.floss.id}`, {
            quantity: this.state.quantityInput
        }).set('Authorization', user.token);
        };

    handleDeleteFromStash = async (e) => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem('user'));

        this.props.deleteFlossFromState(e);

        const deletedFromStash = await request.delete(`https://mighty-mesa-93390.herokuapp.com/api/username/stash/${this.props.floss.id}`)
            .set('Authorization', user.token);
        };

        findById = (array, id) => {
            for (let index = 0; index < array.length; index++) {
                const item = array[index];
                if (item.dmc_id === id) {
                    return true;
                } 
            }
        };

    render() {
        const { floss } = this.props;
        const {
            description,
            dmc_id,
            hex, 
        } = floss;

        return (
            <div>
                <li className='flossBox'>
                    {/* <Link to={`detail/${floss.id}`} key={`link_${dmc_id}`}> */}
                    <h3>{ description }</h3>
                    {/* </Link> */}
                    <h3>{ 
                            window.location.pathname === '/user/stash'
                                ? dmc_id
                                : floss.id
                        }
                    </h3>
                    <div>
                        <div className='hexContainer' style={{backgroundColor: `#${hex}`, border: `#${hex}`}}></div> 
                    </div>
{/* Write a function to post api/username/stash/id to update quantity*/}
                    
                { window.location.pathname === '/user/stash'
                ? <label for='owned'>Skeins Owned: 
                <select id='owned' value={this.state.quantityInput} onChange={(e) => this.setState({ quantityInput: e.target.value})}>
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
                    : ''
                    }
                { window.location.pathname === '/user/stash'
                    ?   <div>
                            <button onClick={ this.handleUpdateStash }> Update Stash</button>
                            <button value={this.props.floss.id} onClick={ this.handleDeleteFromStash }> Remove</button>
                        </div>
                    :   <button 
                            onClick={ this.handleAddStash }
                            disabled={this.findById(this.props.stashedFlosses, this.props.floss.id) 
                            ? true
                            : false } 
                            >Stash</button>
                }
                </li>
            </div>
        )
    }

})  

