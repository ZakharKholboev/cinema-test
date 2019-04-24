import * as moviesData from '../../data.json';


export function genresReducer(genres: string[] = moviesData.genres, action) {
  switch (action.type) {
    default: return genres;
  }
}
