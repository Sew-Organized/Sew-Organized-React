import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleIdSearch}>
          <input type="text" onChange={this.props.handleIdChange} className="searchInput" />
          <button>Search ID</button>
        </form>
        <form onSubmit={this.props.handleNameSearch}>
          <input type="text" onChange={this.props.handleNameChange} className="searchInput" />
          <button>Search Name</button>
        </form>
      </div>
    )
  }
}
