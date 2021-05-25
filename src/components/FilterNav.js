import React, { Component } from "react";
import "../style/filterNav.css";
import requests from "../API/requests";
import Categories from "../components/Categories";

class FilterNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchUrl: requests.fetchTopRated,
    };
  }

  handeleClick = async (e) => {
    if (e.target.value === "Action") {
      await this.setState({
        fetchUrl: requests.fetchActionMovies,
      });
    } else if (e.target.value === "Comedy") {
      await this.setState({
        fetchUrl: requests.fetchComedyMovies,
      });
    } else if (e.target.value === "Horror") {
      await this.setState({
        fetchUrl: requests.fetchHorrorMovies,
      });
    } else if (e.target.value === "Documentaries") {
      await this.setState({
        fetchUrl: requests.fetchDocumentaries,
      });
    } else if (e.target.value === "TV") {
      await this.setState({
        fetchUrl: requests.fetchTopTvShows,
      });
    }
  };

  render() {
    return (
      <>
        <nav>
          <ul className="ahNav">
            <li>
              <input
                className="ahInput"
                type="button"
                value="Action"
                onClick={this.handeleClick}
              />
            </li>
            <li>
              <input
                className="ahInput"
                type="button"
                value="Comedy"
                onClick={this.handeleClick}
              />
            </li>
            <li>
              <input
                className="ahInput"
                type="button"
                value="Horror"
                onClick={this.handeleClick}
              />
            </li>
            <li>
              <input
                className="ahInput"
                type="button"
                value="Documentaries"
                onClick={this.handeleClick}
              />
            </li>
            <li>
              <input
                className="ahInput"
                type="button"
                value="TV"
                onClick={this.handeleClick}
              />
            </li>
          </ul>
        </nav>
        <Categories fetchUrl={this.state.fetchUrl} />
      </>
    );
  }
}

export default FilterNav;
