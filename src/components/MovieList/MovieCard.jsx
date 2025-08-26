import React from "react";

import "./MovieCard.css";
import Star from "../../assets/glowing-star.png";

const MovieCard = () => {
  return (
    <a href="" className="movie_card">
      <img
        src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg"
        alt="movie poster"
        className="movie_poster"
      />

      <div className="movie_details">
        <h3 className="movie_details_heading">Movie Name</h3>
        <div className="align_center movie_date_rate">
          <p>10-20-2020</p>
          <p>
            8.0 <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          doloremque molestias unde soluta ea aperiam!
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
