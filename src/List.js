import React, { Component } from 'react'
// import request from 'superagent';
// import { Link } from 'react-router-dom';
import Floss from './Floss.js';

export default class List extends Component {
  render() {

    console.log(this.props, 'this is list.js') 
        return (
            <div>
                <ul className='flossContainer'>
                { this.props.flosses.map(floss => 
                    <Floss floss={floss} setStash={this.props.handleClick} {...this.props}/>
                    // ..this.props passes everything from colors to floss
                    // this means that everything that colors passed to list is accessable to floss ie allowing for favorites to be possible
                ) }
                </ul>
            </div>
        )
    }
}

