import React, {useState} from "react";
import { useDispatch } from "react-redux";
import "./MovieList.scss";
import { addToCart } from "../../../Redux/movies/cartslice";


const MovieList = ({ movies, onMovieClick, onAddToCart}) => {
  console.log("Movies", movies)

  const dispatch = useDispatch();

  const handleAddToCart = (movie) => {
    dispatch(addToCart(movie));
  };
  
  if (!movies) {
    return <div className="d-flex align-items-center justify-content-center"><i className="fa fa-spinner"></i><b>Loading...</b></div>; // or you can display a loading indicator or a message
  }

  return (
    <div className="movie-wrapper p-5">
    <div className="movie-list">
      <h2 style={{"font-weight":"bolder"}}>Movies</h2>
      <div className="movie-container"> {movies.map((movie) => (
       <div key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title}  onClick={() => onMovieClick(movie.imdbID)} style={{"cursor":"pointer"}} />
          <h4>Title:{movie.Title}</h4>
          <b>Year:{movie.Year}</b>
          <button  className="btn btn-primary add-btn" onClick={() => handleAddToCart(movie)}> Add to Cart</button>
        </div>
      ))}
      </div>
    </div>
  </div>
     
  );
  // const [term, setTerm] = useState('');
  // const { data, error, isLoading } = useSearchMoviesQuery(term);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   setTerm(e.target.search.value);
  // };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }
  
  // return (
  //   <div>
  //     <form onSubmit={handleSearch}>
  //       <input type="text" name="search" />
  //       <button type="submit">Search</button>
  //     </form>
  //     {data && data.Search ? (
  //       <ul>
  //         {data.Search.map((movie) => (
  //           <li key={movie.imdbID}>
  //             <img src={movie.Poster} alt={movie.Title} />
  //             <h3>{movie.Title}</h3>
  //             <p>{movie.Year}</p>
  //           </li>
  //         ))}
  //       </ul>
  //     ) : (
  //       <p>No movies found.</p>
  //     )}
  //   </div>
  // );
};

export default MovieList;
