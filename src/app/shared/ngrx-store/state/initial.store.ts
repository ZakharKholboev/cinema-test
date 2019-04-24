import { boughtTicketsReducer } from '../reducers/bought-tickets.reducer';
import { filteredMoviesReducer } from '../reducers/filtered-movies.reducer';
import { genresReducer } from '../reducers/genres.reducer';
import { moviesReducer } from '../reducers/movies.reducer';
import { selectedGenreReducer } from '../reducers/selected-genre.reducer';
import { selectedMovieReducer } from '../reducers/selected-movie.reducer';


export const storeReducers = {
  genres: genresReducer,
  selectedGenre: selectedGenreReducer,
  movies: moviesReducer,
  filteredMovies: filteredMoviesReducer,
  selectedMovie: selectedMovieReducer,
  boughtTickets: boughtTicketsReducer
};
