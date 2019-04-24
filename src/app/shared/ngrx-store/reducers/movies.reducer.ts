import { Movie } from '../../models/movie.model';
import * as moviesData from '../../data.json';


export function moviesReducer(movies: Movie[] = moviesData.movies, action) {
  switch (action.type) {
    default: return movies;
  }
}
