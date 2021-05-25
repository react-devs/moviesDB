import React, { Component } from "react";
import axios from "../API/axios";
import Card from "./Card";
import "../style/home.css";

class Categories extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount = async () => {
    const { fetchUrl } = this.props;

    const response = await axios.get(fetchUrl);

    this.setState({
      movies: response.data.results,
    });
  };

  componentDidUpdate = async () => {
    const { fetchUrl } = this.props;

    const response = await axios.get(fetchUrl);

    this.setState({
      movies: response.data.results,
    });
  };

  render() {
    const moviesList = this.state.movies.map((movie) => <Card movie={movie} />);

    return <div className="moviesListContainer">{moviesList}</div>;
  }
}

export default Categories;
