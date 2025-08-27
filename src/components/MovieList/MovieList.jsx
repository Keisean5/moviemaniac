import React, { useEffect, useState } from "react";

import "./MovieList.css";
import Fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = () => {
  //display full, original list from the API
  const [movies, setMovies] = useState([]);

  //when clicking on the list item, we will set the min rating to that rate
  const [minRating, setMinRating] = useState(0);

  //state to hold the currently displayed list
  const [filterMovies, setFilterMovies] = useState([]);

  //logic to call the api
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=7227a275ce2178dd2da26e46a6e575ea"
    );
    const data = await response.json();
    setMovies(data.results); //keep original data
    setFilterMovies(data.results); // start with everything visible
  };

  //filter the movies based on movie rating
  const handleFilter = (rate) => {
    if (rate === minRating) {
      // Case 1: User clicked the *same* filter again (toggle off)
      setMinRating(0);
      setFilterMovies(movies); // reset to show all movies
    } else {
      setMinRating(rate);

      const filtered = movies.filter((movie) => movie.vote_average >= rate);

      setFilterMovies(filtered);
    }
  };

  return (
    <section className="movie_list">
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          Popular <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </h2>
        <div className="align_center movie_list_fs">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]} // use array for adding more ratings in future
          />

          <select name="" id="" className="movie_sorting">
            <option value="">SortBy</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select name="" id="" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
