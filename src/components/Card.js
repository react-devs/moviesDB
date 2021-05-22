import React, { Component } from "react";

class Card extends Component {
  render() {
    const baseImgUrl = "https://image.tmdb.org/t/p/original";
    const{poster_path,original_title} = this.props.movie
    return (
      <>
        <img
          src={`${baseImgUrl}${poster_path}`}
          alt={original_title}
          style={{ width: "15rem",margin:"1rem" }}
        />
      </>
    );
  }
}

export default Card;
