import axios from "axios";
import React, { Component } from "react";
import NavBar from "./NavBar";
import { withAuth0 } from "@auth0/auth0-react";
import "../style/watchlist.css";
// import Img from '../img/a.jpg'
class WatchList extends Component {
  constructor(props) {
    super(props);
    const { user } = this.props.auth0;

    this.state = {
      watchListMovies: [],
      showMovies: false,
      userEmail: user.email,
      server: process.env.REACT_APP_SERVER_URL,
      // index: 0
    };
  }

  componentDidMount = async () => {
    try {
      const params = {
        email: this.state.userEmail,
      };

      const moviesList = await axios.get(`${this.state.server}/movies`, { params: params });

      this.setState({
        watchListMovies: moviesList.data.movies,
        showMovies: true,
      });
      console.log('this is what u are lookin for', moviesList);
      console.log("what is this:", this.state.watchListMovies);
    } catch (error) {
      console.log(error);
    }
  };

  deleteMovie = async (index) => {

    const newMovieList = this.state.watchListMovies.filter((movie, idx) => {
      return idx !== index;
    });

    this.setState({
      watchListMovies: newMovieList,

    });

    const query = {
      email: this.state.userEmail
    }

    await axios.delete(`${this.state.server}/movies/${index}`, { params: query });

  }

  render() // const baseImgUrl = "https://image.tmdb.org/t/p/original";
  {


    return (
      <>
        <NavBar />
        <h1 style={{ color: "black", margin: "5rem" }}>WatchList</h1>
        <div className="all-cards">
          {this.state.watchListMovies.map((movie, idx) => {
            return (
              <>
                <div id="card_container" data-offset="2">
                  <div className="pg"></div>
                  <div id="card">
                    <div className="shine"></div>
                    <div className="text-block">
                      <h1>
                        {movie.name}
                        <small>{movie.year}</small>
                      </h1>
                      <h2>{movie.duration}</h2>
                      <p>
                        {movie.description}
                      </p>
                      <button onClick={() => { this.deleteMovie(idx) }}> Delete </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

      </>
    );
  }
}
export default withAuth0(WatchList);
