export const GENRE_ACTION = {
  SELECT: 'SELECT_GENRE'
};


export class SelectGenreAction {
  readonly type = GENRE_ACTION.SELECT;
  payload: {
    genre: string
  };

  constructor(genre: string) {
    this.payload = {
      genre
    };
  }
}
