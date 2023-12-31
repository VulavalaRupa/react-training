import React, { useEffect } from "react";
import "./MovieDetail.scss";
// import { useParams } from "react-router";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchAsyncMovieOrShowDetail,
//   getSelectedMovieOrShow,
//   removeSelectedMovieOrShow,
// } from "../../../Redux/movies/movieSlice";

const MovieDetail = ({ movie }) => {
  console.log("Movie", movie)

  return (
    <div className="p-5">
    <div className="movie-section ">
      {Object.keys(movie).length === 0 ? (
        <div>...Loading</div>
      ) : (
    <>
      <div className="section-left">
        <div className="movie-title">{movie.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating <i className="fa fa-star"></i> : {movie.imdbRating}
          </span>
          <span>
            IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
            {movie.imdbVotes}
          </span>
          <span>
            Runtime <i className="fa fa-film"></i> : {movie.Runtime}
          </span>
          <span>
            Year <i className="fa fa-calendar"></i> : {movie.Year}
          </span>
        </div>
        <div className="movie-plot">{movie.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{movie.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{movie.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{movie.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{movie.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{movie.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
    </>
       )}
       </div>
       </div>
  );
};

export default MovieDetail;
