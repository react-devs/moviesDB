import React, { Component } from "react";
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './auth0/LogOut'

class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="nav-wrapper red darken-3">
          <div className="container">
            <a className="brand-logo">Movies Times</a>
            <ul className="right">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/watchlist">WatchList</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <LogoutButton/>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default withAuth0(NavBar);
