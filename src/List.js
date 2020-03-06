import React, { Component } from 'react'
import Floss from './Floss.js';

export default class List extends Component {
    render() {
        return (
            <div>
                <ul className='flossContainer'>
                { this.props.flosses.map(floss => 
                    <Floss 
                        floss={floss} 
                        setStash={this.props.handleClick} 
                        deleteFlossFromState={this.props.deleteFlossFromState} 
                        {...this.props}/>
                ) }
                </ul>
            </div>
        )
    }
}

