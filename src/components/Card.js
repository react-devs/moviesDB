import React, { Component } from "react";
import { Link } from "react-router-dom";


class Card extends Component {
  render() {
    const baseImgUrl = "https://image.tmdb.org/t/p/original";
    const{poster_path,original_title,id} = this.props.movie
    return (
      <>
      <Link to={`movie/${id}`}>
        <img
          src={`${baseImgUrl}${poster_path}`}
          alt={original_title}
          style={{ width: "15rem",margin:"1rem" }}
        />
      </Link>
        
      </>
    );
  }
}

export default Card;
