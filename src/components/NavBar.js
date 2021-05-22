import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="nav-wrapper red darken-3">
          <div className="container">
            <a className="brand-logo">Movies Times</a>
            <ul className="right">
              <li>
                <a href="/homepage">Home</a>
              </li>
              <li>
                <a href="/watchlist">WatchList</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
