import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Footer.css';

export default withRouter(class Footer extends Component {
  render() {
    return (
      <div id="footerComponent">
        {
          this.props.location.pathname === '/splash'
            ? <a href="/about">About the Developers</a>
            : <a href="/splash">Return Home</a>
        }
      </div>
    )
  }
})
