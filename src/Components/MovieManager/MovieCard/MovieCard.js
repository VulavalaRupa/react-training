import React, { useState, useEffect } from "react";
import "./MovieCard.scss";
import { useSearchMoviesQuery, useGetMovieByIdQuery } from "../../../API/rtkQueryApi";
import MovieDetail from "../MovieDetail/MovieDetail";
import MovieList from "../MovieList/MovieList";
import Cart from "../MovieCart/CartList";
import { useNavigate } from "react-router";
import CartList from "../MovieCart/CartList";

const MovieCard = () => {
  const navigate = useNavigate();
  // const { term, setTerm } = useState('')
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const { data: searchResults, error: searchError } = useSearchMoviesQuery(searchQuery);
  const { data: movieDetails, error: detailsError } = useGetMovieByIdQuery(selectedMovieId);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Retrieve cart items from localStorage during initialization
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCart(JSON.parse(storedCartItems));
    }
  }, []);

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
 
  const handleAddToCart = (movieId, movieTitle) => {
    const newCart = [...cart, { id: movieId, title: movieTitle }];
    setCart(newCart);
    localStorage.setItem('cartItems', JSON.stringify(newCart)); 
    navigate('/home/cartlist')
  };

  return (
    <div>
      {selectedMovieId ? (
        <>
         <MovieDetail movie={movieDetails}/>
        </>
       
      ) : (
        <>
          {/* <form onSubmit={handleSearch}>
            <input type="text" name="search" />
            <button type="submit">Search</button>
          </form> */}
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search movies..."
            />
          </form>
          <MovieList movies={searchResults?.Search.filter((movie) =>
            movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
          )}
            onMovieClick={handleMovieClick} onAddToCart={handleAddToCart} />
        </>
      )}
    </div>

  );

};

export default MovieCard;
