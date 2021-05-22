import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import requests from './API/requests';
import Container from './components/Container';
import LandingPage from './components/LandingPage';
// import IsLoadingAndError from './IsLoadingAndError';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
class App extends Component {
  render() {
    console.log(requests.fetchTrending)
    const { isAuthenticated } = this.props.auth0;
    return (
      <div>
        {/* <LandingPage /> */}
        {/* <MoviesContainer fetchUrl={requests.fetchTrending} /> */}
        <>
          <Router>
            <Switch>
              <Route exact path="/">{!isAuthenticated ? <LandingPage /> : <Container/>}
              </Route>
            </Switch>
          </Router>
        </>
      </div>
    )
  }
}
export default withAuth0(App);