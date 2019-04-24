import { GENRE_ACTION } from '../actions/genre.action';


export function selectedGenreReducer(genre: string = 'All', action) {
  switch (action.type) {
    case GENRE_ACTION.SELECT:
      return action.payload.genre;

    default: return genre;
  }
}
