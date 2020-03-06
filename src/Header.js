import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.header}</h1>
                <h1 className='logo'>Sew Organized</h1>
            </header>
        )
    }
}
