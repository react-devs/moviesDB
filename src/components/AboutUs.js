import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import NavBar from '../components/NavBar'


class AboutUs extends Component {
  render() {
    return (<>
      <NavBar/>
      <div>
        <h1>about us component</h1>
      </div>
      </>
    );
  }
}

export default withAuth0(AboutUs);
