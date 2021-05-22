import React, { Component } from "react";
import axios from "../API/axios";
import HeroBanner from "./HeroBanner";
import Card from "./Card";
import NavBar from "./NavBar";


class Home extends Component {
  state = {
    movies: [],
  };

  componentDidMount = async () => {
    const { fetchUrl } = this.props;

    console.log(fetchUrl);

    const response = await axios.get(fetchUrl);

    this.setState({
      movies: response.data.results,
    });
  };

  render() {
    const moviesList = this.state.movies.map((movie) => <Card movie={movie} />);

    return (
      <>
        <NavBar/>
        <HeroBanner />
        <div className="moviesListContainer" >
        {moviesList}
        </div>
      </>
    );
  }
}

export default Home;
