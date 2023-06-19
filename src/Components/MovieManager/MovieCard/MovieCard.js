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
  const [count, setCount] = useState(0);

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
 
  const handleAddToCart = (movieId, movieTitle) => {
    const newCart = [...cart, { id: movieId, title: movieTitle }];
    setCart(newCart);
    localStorage.setItem('cartItems', JSON.stringify(newCart)); 
    setCount(newCart.length);
    alert("Added to cart successfully")
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
       <i className="fa fa-shopping-cart" style={{"font-size":"2rem", cursor:"pointer"}} onClick={navigateToCart}> </i>
       <span class="badge badge-light">{count}</span>
       </div>
       </div>
      {selectedMovieId ? (
        <>
         <MovieDetail movie={movieDetails}/>
        </>
       
      ) : (
        <>
          {/* <div className="top-row">
          <form onSubmit={(e) => e.preventDefault()}>
            <input className="search"
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search movies..."
            />
          </form>
          <div className="icon-class">
       <i className="fa fa-shopping-cart" style={{"font-size":"2rem"}} onClick={navigateToCart}> </i>
       <span class="badge badge-light">{count}</span>
       </div>
       </div> */}
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
