import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.scss";
import { addToCart } from "../../../Redux/movies/cartslice";


const MovieList = ({ movies, onMovieClick }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);


  const handleAddToCart = (movie) => {
    dispatch(addToCart(movie));
  };

  const isMovieInCart = (movie) => {
    return cartItems.some((item) => item.imdbID === movie.imdbID);
  };

  if (!movies) {
    return <div className="d-flex align-items-center justify-content-center"><i className="fa fa-spinner"></i><b>Loading...</b></div>; 
    }

  return (
    <div className="movie-wrapper p-5">
      <div className="movie-list">
        <h2 style={{ "font-weight": "bolder" }}>Movies</h2>
        <div className="movie-container"> {movies.map((movie) => (
          <div key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} onClick={() => onMovieClick(movie.imdbID)} style={{ "cursor": "pointer" }} />
            <h4>Title:{movie.Title}</h4>
            <b>Year:{movie.Year}</b>
            <button className="btn btn-primary add-btn" onClick={() => handleAddToCart(movie)} disabled={isMovieInCart(movie)}>
              {isMovieInCart(movie) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
        </div>
      </div>
    </div>

  );
};

export default MovieList;
