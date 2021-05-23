import React, { Component } from "react";
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './auth0/LogOut';
import { Link } from "react-router-dom";


class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="nav-wrapper red darken-3">
          <div className="container">
            <p className="brand-logo">Movies Times</p>
            <ul className="right">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">WatchList</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
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
