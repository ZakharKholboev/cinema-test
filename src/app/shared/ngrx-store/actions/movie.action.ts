import { Movie } from '../../models/movie.model';


export const MOVIE_ACTION = {
  SELECT: 'SELECT_MOVIE'
};


export class SelectMovieAction {
  readonly type = MOVIE_ACTION.SELECT;
  payload: {
    movie: Movie
  };

  constructor(movie: Movie) {
    this.payload = {
      movie
    };
  }
}
