import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import "../style/MovieProfile.css";
import { Link } from "react-router-dom";
// https://api.themoviedb.org/3/movie/578701/videos?api_key=327835964ac0c735575e3185ae623d2b&language=en-US movie trailer
// https://api.themoviedb.org/3/movie/578701?api_key=327835964ac0c735575e3185ae623d2b&language=en-US movie details
// https://api.themoviedb.org/3/movie/578701/credits?api_key=327835964ac0c735575e3185ae623d2b&language=en-US actor details
import NavBar from "./NavBar";
import axios from "../API/axios";



class MovieProfile extends Component {

  constructor(props) {
    super(props);
    const { user } = this.props.auth0;

    this.state = {
      actors: [],
      email: user.email,
      movieName: '',
      movieDescription: '',
      movieYear: '',
      duration: '',
      id: ''
    }

  }




  componentDidMount = async () => {
    // get the data here
    const detailsUrl = `/movie/${this.props.match.params.id}?api_key=${process.env.REACT_APP_MOVIES_DB_KEY}&language=en-US`;

    const actorUrl = `/movie/${this.props.match.params.id}/credits?api_key=${process.env.REACT_APP_MOVIES_DB_KEY}&append_to_response=person_id`;


    const movieIdresponse = await axios.get(detailsUrl);
    console.log('details url', movieIdresponse);
    const creditResponse = await axios.get(actorUrl);

    console.log(movieIdresponse.data.id);
    console.log('new link', creditResponse);

    this.setState({
      id: movieIdresponse.data.id,
      actors: creditResponse.data.cast,
      movieName: movieIdresponse.data.title,
      movieDescription: movieIdresponse.data.overview,
      movieYear: movieIdresponse.data.release_date,
      duration: movieIdresponse.data.runtime
    });

  }

  getWatchedlistByClick = async (e) => {
    e.preventDefault();
    const bodyData = {
      email: this.state.email,
      movieName: this.state.movieName,
      movieDescription: this.state.movieDescription,
      movieYear: this.state.movieYear,
      duration: this.state.duration

    }

    await axios.post(`http://localhost:8081/movies`, bodyData);

  }



  render() {
    // const baseUrl = 'https://www.youtube.com/watch?v='
    const actor = this.state.actors.slice(0, 3).map((actor, index) => {

      return (
        <>
          <Link to={`/actor/${actor.id}/${actor.credit_id}`}>
            <p key={index}>Actors: {actor.name}</p>
          </Link>
        </>
      )
    })
    console.log(this.props.match.params.id);


    return (
      <>
        <NavBar /> {/* <h1>movie id ={this.props.match.params.id}</h1> */}
        {/* <div className="cont">
          
            <div className="backgroundImage" style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original/c0izdYdnTe4uMRifHgvTA85wPz0.jpg")`
            }}>
              <div className="overlay">
           heloo

          
            </div>
          </div>
        </div> */}
        <div>
          {actor}

          <button onClick={(e) => { this.getWatchedlistByClick(e) }}>Add to watchlist</button>
        </div>

        {/* <div className="coverImage">
          
          <img className="imageBackground" src="https://image.tmdb.org/t/p/original/c0izdYdnTe4uMRifHgvTA85wPz0.jpg" alt="ss"/>
          
          </div>

          <div className="overlay">
          <div className="details">
          <h1 className="movieTitle">Army of the Dead</h1>
          <h4>Category: Action, Thriller</h4>
          <div>
          <h3 className="ratings">6.7</h3>
          <button className="watchlist">Add To Watchlist</button>
          </div>

          <p><strong>Overview: </strong> Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble: venturing into the quarantine zone to pull off the greatest heist ever attempted.</p>
          <p>language: en</p>
          <p>Total Votes: 128</p>
          <p>Actors: </p>
          <p>Release date: 2021-05-14</p>



          </div>
          

          <div className="MovieImage">
            <img className="image" src="https://image.tmdb.org/t/p/original/x3taBaWfRzw1NIKhEPpKPwKBAOC.jpg" alt="ss" />
          </div>
          </div>


          <div className="clearFloats"></div>


          <div className="TrailerSection">
            <h1 className="trailerHeading">Movie Trailer</h1>
            <div className="">

            <iframe width="900" height="500" src="https://www.youtube.com/embed/tI1JGPhYBS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            

          </div> */}
      </>
    );
  }
}

export default withAuth0(MovieProfile);
