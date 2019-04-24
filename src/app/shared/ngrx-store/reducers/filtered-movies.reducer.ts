import { Movie } from '../../models/movie.model';
import * as moviesData from '../../data.json';
import { FILTERED_MOVIES_ACTION } from '../actions/filtered-movies.action';


export function filteredMoviesReducer(filteredMovies: Movie[] = moviesData.movies, action) {
  switch (action.type) {
    case FILTERED_MOVIES_ACTION.SET:
      return action.payload.filteredMovies;

    default: return filteredMovies;
  }
}
