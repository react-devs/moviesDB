import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/card.css";

class Card extends Component {
  render() {
    const baseImgUrl = "https://image.tmdb.org/t/p/original";
    // console.log(this.props.movie)
    const { poster_path, original_title, id,overview,popularity } = this.props.movie;

    const cutOverview = overview.split(" ").slice(0,10).join(" ")

    const intViews = Math.floor(popularity)


    return (
      <>
        <Link to={`movie/${id}`}>
          <div className="card">
            <a href={() => false}>
              <div
                className="img1"
                style={{
                  backgroundImage: `url("${baseImgUrl}${poster_path}")`,
                }}
              ></div>
              <div
                className="img2"
                style={{
                  backgroundImage: `url("${baseImgUrl}${poster_path}")`,
                }}
              ></div>
              <div className="title">{original_title}</div>
              <div className="text">
              {cutOverview}
              </div>
              <a href={() => false}>
                <div className="catagory">
                  Movie <i className="fas fa-film"></i>
                </div>
              </a>
              <a href={() => false}>
                <div className="views">
                  {intViews} <i className="far fa-eye"></i>{" "}
                </div>
              </a>
            </a>
          </div>
        </Link>
      </>
    );
  }
}

export default Card;
