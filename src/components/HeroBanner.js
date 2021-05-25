import React, { Component } from "react";
import "../style/heroBanner.css";
import axios from "../API/axios";
import { Link } from "react-router-dom";

class HeroBanner extends Component {
  state = {
    topFive: [],
  };

  componentDidMount = async () => {
    const { TopFive } = this.props;
    const response = await axios.get(TopFive);

    this.setState({
      topFive: response.data.results,
    });
  };

  render() {
    const baseImgUrl = "https://image.tmdb.org/t/p/original";

    console.log(this.state.topFive);

    const topfive = this.state.topFive.slice(0, 6).map((movie, idx) => {
      return (
        <li key={idx}>
          <div class="image_title">
            <a href={() => false}>{movie.original_title}</a>
          </div>
          <Link to={`movie/${movie.id}`}>
            <a href={() => false}>
              <img
                src={`${baseImgUrl}${movie.backdrop_path}`}
                alt="transformers4_1080x640"
                border="0"
                style={{ height: "33rem" }}
              />
            </a>
          </Link>
        </li>
      );
    });

    return (
      <div className="accordion">
        <ul>{topfive}</ul>
      </div>
    );
  }
}

export default HeroBanner;
