import axios from 'axios';
import React, { Component } from 'react';
import NavBar from './NavBar'
import { withAuth0 } from '@auth0/auth0-react';
import '../style/wishList.css';
// import Img from '../img/a.jpg'
class WatchList extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     watchListMovies: [],
  //     showMovies: false,
  //     userEmail: '',
  //     server: process.env.REACT_APP_SERVER_URL,
  //   }
  // }
  // getWatchListMovies = async () => {
  //   const { user } = this.props.auth0;
  //   try {
  //     const params = {
  //       email: user.email
  //     }
  //     const moviesList = await axios.get(`${this.state.server}/movies`, { params: params });
  //     this.setState({
  //       watchListMovies: moviesList.data[0].movies,
  //       showMovies: true,
  //       email: user.email
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // deleteMovie = async (index) => {
  //   const { user } = this.props.auth0;
  //   const newMovieList = this.state.watchListMovies.filter((movie, idx) => {
  //     return idx !== index;
  //   });
  //   const query = {
  //     email: user.email
  //   }

  //   await axios.delete(`${this.state.server}/movies/${index}`, { params: query });

  // }
  //////////////////////////////////////////
  // state = {
  //   movies: [],
  // };

  // componentDidMount = async () => {
  //   const { fetchUrl } = this.props;

  //   console.log(fetchUrl);

  //   const response = await axios.get(fetchUrl);
  //   // console.log(response.data.results[0].id);
  //   this.setState({
  //     movies: response.data.results,
  //   });

  //   // console.log(this.state.movies)
  //   // console.log(response)

  // };

  render() {
    // const baseImgUrl = "https://image.tmdb.org/t/p/original";
    // const moviesList = this.state.watchListMovies.map(movie => {


    console.log(this.state.watchListMovies)
    return (
      <>
        <NavBar />
        {/* /////////////////////////// */}
        {/* <div className="movies__container">
            <div className="movie" style={{backgroundImage: `url(https://ae01.alicdn.com/kf/HTB1xKI9PFXXXXXAXVXXq6xXFXXXG/Dropship-The-Shawshank-Redemption-Nostalgia-classic-movie-kraft-paper-bar-poster-Retro-Poster-decorative-painting.jpg)` , width: '35rem', height: '35rem'}  }>
              <img className="card-img-top" src={'https://ae01.alicdn.com/kf/HTB1xKI9PFXXXXXAXVXXq6xXFXXXG/Dropship-The-Shawshank-Redemption-Nostalgia-classic-movie-kraft-paper-bar-poster-Retro-Poster-decorative-painting.jpg'} alt={'movie1'} style={{ width: '10rem' }} />
              <div className="movie__infos">
                <h2 className="movie__title">The Shawshank Redemption</h2>
                <h4 className="movie__year" style={{ fontSize: '20px' }}> Year : 1994</h4>
                <h4 className="movie__director" style={{ fontSize: '20px' }}>Director :  Frank Darabont </h4>
                <span className ="movie__duration" style={{ fontSize: '20px' }} > Duration : 142 min </span>
                <br/>
                <span className ="Rating" style={{ fontSize: '20px' }}> Rating : 9.3 </span>
                <p className="movie__description" >Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.</p>  
                <div className ="movie__button"style={{ fontSize: '20px' }}>
                  <button onClick={() => { }}> Delete </button>
                </div> 
              </div>
            </div>
          </div> */}
        {/* /////////////////////////////////////// */}


        <h1 style={{ color: 'black', margin: '5rem' }}>Wish List</h1>


        <div id="card_container" data-offset="2">
          <div class="pg">
            {/* <img src={Img} alt='' /> */}
          </div>
          <div id="card" >
            <div class="shine"></div>
            <div class="text-block">
              <h1>Aquaman <small>(2018)</small></h1>
              <h3>Action | Adventure</h3>
              <p>
                Arthur Curry learns that he is the heir to the underwater kingdom of Atlantis, and must step forward to lead his people and be a hero to the world.
      </p>
              <button onClick={() => { }}> Delete </button>
            </div>
          </div>
        </div>



      </>
    );
  }
}
export default withAuth0(WatchList);
