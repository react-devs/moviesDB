import React, { Component } from "react";
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './auth0/LogOut';
import { Link } from "react-router-dom";
import '../style/navbar.css'
// import logo from '../img/MoviesDB.svg'



class NavBar extends Component {
  render() {
    return (
      <header>
        <h2 className="ahlogo" >MoviesDB</h2>
        <nav>
          <ul className="nav__link" >
            <li><Link to="/home" ><a href={() => false}>Home</a></Link></li>
            <li> <Link to="/watchlist" ><a href={() => false}>WatchList</a></Link></li>
            <li> <Link to="/aboutus" ><a href={() => false}>About</a></Link></li>
          </ul>
        </nav>
        <a className="cta" href={() => false}><LogoutButton/></a>
      </header>
    );
  }
}

export default withAuth0(NavBar);
