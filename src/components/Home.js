import React, { Component } from 'react';
import axios from '../API/axios'
import HeroBanner from './HeroBanner'



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
      const baseImgUrl = "https://image.tmdb.org/t/p/original";
  
      const moviesList = this.state.movies.map((movie) => {
        return (
          <>
            <img
              src={`${baseImgUrl}${movie.poster_path}`}
              alt={movie.original_title}
              style={{ width: "10rem" }}
            />

          </>
        );
      });
  
      return (
        <div>
            <HeroBanner/>
            {moviesList}
        </div>
      );
    }
  }
  
  export default Home;