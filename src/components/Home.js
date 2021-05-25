import React, { Component } from "react";
import HeroBanner from "./HeroBanner";
import NavBar from "./NavBar";
import "../style/home.css";
import requests from "../API/requests";
import FilterNav from "../components/FilterNav";

class Home extends Component {
  render() {
    return (
      <div className="ahcontainer">
        <NavBar />
        <HeroBanner TopFive={requests.fetchTrending} />
        <FilterNav />
      </div>
    );
  }
}

export default Home;
