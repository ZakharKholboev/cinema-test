import { Movie } from '../../models/movie.model';
import { MOVIE_ACTION } from '../actions/movie.action';


export function selectedMovieReducer(movie: Movie = null, action) {
  switch (action.type) {
    case MOVIE_ACTION.SELECT:
      return action.payload.movie;

    default: return movie;
  }
}
