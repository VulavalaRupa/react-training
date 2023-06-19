import axios from 'axios';

const API_KEY = '7169d07b';

// export const fetchMovieDetails = async (movieTitle) => {
//     const url = `http://www.omdbapi.com/?s=star wars&apikey=7169d07b`;
//     try {
//       const response = await axios.get(url);
//       return response.data;
//     } catch (error) {
//       throw new Error('Error fetching movie details');
//     }
//   };
  
export default axios.create({
    baseURL:"http://localhost:9000"
})