import React, { useState, useEffect } from "react";
import "./MovieCard.scss";
import { useSearchMoviesQuery, useGetMovieByIdQuery } from "../../../API/rtkQueryApi";
import MovieDetail from "../MovieDetail/MovieDetail";
import MovieList from "../MovieList/MovieList";
import Cart from "../MovieCart/CartList";
import { useNavigate } from "react-router";

const MovieCard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const { data: searchResults, error: searchError } = useSearchMoviesQuery();
  const { data: movieDetails, error: detailsError } = useGetMovieByIdQuery(selectedMovieId);
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [showPopup, setShowPopup]  = useState(false)


  useEffect(() => {
    // Retrieve cart items from localStorage during initialization
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCart(JSON.parse(storedCartItems));
      setCount(JSON.parse(storedCartItems).length);
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

  const handleAddToCart = (movie) => {
    const isMovieInCart = cart.some((item) => item.imdbID === movie.imdbID);
    console.log("isMovieInCart", isMovieInCart)
    if (!isMovieInCart) {
      // Check if the movie is already in localStorage
      const storedItems = localStorage.getItem('cartItems');
      const storedMovies = storedItems ? JSON.parse(storedItems) : [];
      const isMovieInLocalStorage = storedMovies.some(
        (item) => item.imdbID === movie.imdbID
      );
      if (!isMovieInLocalStorage) {
        // update the cart
        setCart((prevCartItems) => [...prevCartItems, movie]);
        const updatedItems = [...storedMovies, movie];
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        setCount(updatedItems.length);
        alert("Successfully added to cart")
      }
    }
    if(isMovieInCart === true){
      alert("Already added to cart")
    }
  };

  const navigateToCart = () => {
    navigate('/home/cartlist')
  }
  

  return (
    <div>
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
          <span class="badge badge-light">{count}</span>
        </div>
      </div>
      {selectedMovieId ? (
        <>
          <MovieDetail movie={movieDetails} />
        </>

      ) : (
        <>
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
