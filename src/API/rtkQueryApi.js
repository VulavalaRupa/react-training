import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = '7169d07b'; 

export const movieApi = createApi({
  reducerPath: 'omdb',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://www.omdbapi.com/' }),
  endpoints: (builder) => ({
    searchMovies: builder.query({
      query: (term) => `?apikey=${API_KEY}&s=${term}`,
    }),
    getMovieById: builder.query({
        query: (id) => `?apikey=${API_KEY}&i=${id}`,
      }),
  }),
});

export const { useSearchMoviesQuery, useGetMovieByIdQuery} = movieApi;