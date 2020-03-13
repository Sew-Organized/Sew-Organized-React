import React, { Component } from 'react'

export default class SearchBar extends Component {
  

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSearch}>
          <input type="text" onChange={this.props.handleChange} />
          <button>Search</button>
        </form>
      </div>
    )
  }
}
