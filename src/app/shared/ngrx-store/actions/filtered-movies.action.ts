import { Movie } from '../../models/movie.model';


export const FILTERED_MOVIES_ACTION = {
  SET: 'SET_FILTERED_MOVIES'
};

export class FilteredMoviesAction {
  readonly type = FILTERED_MOVIES_ACTION.SET;
  payload: {
    filteredMovies: Movie[]
  };

  constructor(filteredMovies) {
    this.payload = {
      filteredMovies
    };
  }
}
