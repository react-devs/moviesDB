import React, { Component } from "react";
import requests from "../API/requests";
import NavBar from "./NavBar";
import Home from "./Home";
import WatchList from './WatchList'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Container extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div className="content">
          <Switch>
            <Route exact path="/">
              <Home fetchUrl={requests.fetchTopTvShows} />
            </Route>
            <Route path="/watchlist" exact>
              <WatchList/>
            </Route>
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Container;
