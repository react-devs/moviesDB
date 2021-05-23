import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import "../style/MovieProfile.css";
// https://api.themoviedb.org/3/movie/578701/videos?api_key=327835964ac0c735575e3185ae623d2b&language=en-US  movie trailer
// https://api.themoviedb.org/3/movie/578701?api_key=327835964ac0c735575e3185ae623d2b&language=en-US   movie details
// https://api.themoviedb.org/3/movie/578701/credits?api_key=327835964ac0c735575e3185ae623d2b&language=en-US actor details
import NavBar from "./NavBar";

class MovieProfile extends Component {
  componentDidMount() {
    // get the data here

  }

  render() {
    // const baseUrl = 'https://www.youtube.com/watch?v='

    console.log(this.props.match.params.id);


    return (
      <>
        <NavBar /> {/* <h1>movie id ={this.props.match.params.id}</h1> */}
        <div className="overlay">
          <div className="coverImage">
            <img
              className="imageBackground"
              src="https://image.tmdb.org/t/p/original/c0izdYdnTe4uMRifHgvTA85wPz0.jpg"
              alt="ss"
            />
          </div>
        </div>
        <div className="content">
          <div className="details">
            <h1 className="movieTitle"> Army of the Dead </h1>
            <h4> Category: Action, Thriller </h4>
            <div>
              <h3 className="ratings"> 6.7 </h3>
              <button className="watchlist"> Add To Watchlist </button>
            </div>
            <p>
              <strong> Overview: </strong> Following a zombie outbreak in Las
              Vegas, a group of mercenaries take the ultimate gamble: venturing
              into the quarantine zone to pull off the greatest heist ever
              attempted.
            </p>
            <p> language: en </p> <p> Total Votes: 128 </p> <p> Actors: </p>
            <p> Release date: 2021 - 05 - 14 </p>
          </div>
          <div className="MovieImage">
            <img
              className="image"
              src="https://image.tmdb.org/t/p/original/x3taBaWfRzw1NIKhEPpKPwKBAOC.jpg"
              alt="ss"
            />
          </div>
        </div>
        <div className="clearFloats"> </div>
        <div className="TrailerSection">
          <h1 className="trailerHeading"> Movie Trailer </h1>
          <div className="">
            <iframe
              width="900"
              height="500"
              src="https://www.youtube.com/embed/sV6VNNjBkcE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </>
    );
  }
}

export default withAuth0(MovieProfile);
