import React, { useState } from "react";
import "./MovieCard.scss";
import { useSearchMoviesQuery, useGetMovieByIdQuery } from "../../../API/rtkQueryApi";
import MovieDetail from "../MovieDetail/MovieDetail";
import MovieList from "../MovieList/MovieList";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const MovieCard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const { data: searchResults, error: searchError } = useSearchMoviesQuery();
  const { data: movieDetails, error: detailsError } = useGetMovieByIdQuery(selectedMovieId);
  const cartCount = useSelector((state) => state.cart.count);


  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchQuery(searchTerm);
  };
  const handleMovieClick = (id) => {
    setSelectedMovieId(id);
  };

  if (searchError || detailsError) {
    return <div>Error: {searchError?.message || detailsError?.message}</div>;
  }


  const navigateToCart = () => {
    navigate('/home/cartlist')
  }
  

  return (
    <div>
     
      {selectedMovieId ? (
        <>
          <MovieDetail movie={movieDetails} />
        </>

      ) : (
        <>
         <div className="top-row">
        <form onSubmit={(e) => e.preventDefault()}>
          <input className="search"
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search movies..."
          />
        </form>
        <div className="icon-class">
          <i className="fa fa-shopping-cart" style={{ "font-size": "2rem", cursor: "pointer" }} onClick={navigateToCart}> </i>
          <span class="badge badge-light">{cartCount}</span>
        </div>
      </div>
          <MovieList movies={searchResults?.Search.filter((movie) =>
            movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
          )}
            onMovieClick={handleMovieClick} />
        </>
      )}
    </div>

  );

};

export default MovieCard;
