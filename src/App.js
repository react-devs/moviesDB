import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import requests from "./API/requests";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import WatchList from './components/WatchList'
import MovieProfile from './components/MovieProfile'
import AboutUs from './components/AboutUs'
// import IsLoadingAndError from './IsLoadingAndError';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    console.log(requests.fetchTrending);
    const { isAuthenticated } = this.props.auth0;
    return (
      <div>
        <>
          <Router>
            <Switch>
              <Route exact path="/">
                {!isAuthenticated ? <LandingPage /> : <Home fetchUrl={requests.fetchTopTvShows} /> }
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/home">
                <Home fetchUrl={requests.fetchTopTvShows} />
              </Route>
              <Route exact path="/watchlist">
                <WatchList />
              </Route>
              <Route exact path="/movie/:id" component={MovieProfile} />
              <Route exact path="/aboutus" component={AboutUs} />
            </Switch>
          </Router>
        </>
      </div>
    );
  }
}
export default withAuth0(App);
