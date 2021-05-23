import React, { Component } from "react";
import axios from "../API/axios";
import HeroBanner from "./HeroBanner";
import Card from "./Card";
import NavBar from "./NavBar";
import '../style/home.css'


class Home extends Component {
  state = {
    movies: [],
  };

  componentDidMount = async () => {
    const { fetchUrl } = this.props;

    console.log(fetchUrl);

    const response = await axios.get(fetchUrl);
    
    console.log(response.data.results[0].id);

    this.setState({
      movies: response.data.results,
    });
  };

  render() {
    const moviesList = this.state.movies.map((movie, idx) => <Card key={idx} movie={movie} />);

    return (
      <>
        <NavBar />
        <HeroBanner />
        <div className="moviesListContainer" >
          {moviesList}
        </div>
      </>
    );
  }
}

export default Home;
