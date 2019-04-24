import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Movie } from '../models/movie.model';
import { StateModel } from '../models/state.model';
import { SelectGenreAction } from '../ngrx-store/actions/genre.action';
import { SelectMovieAction } from '../ngrx-store/actions/movie.action';


@Injectable()
export class MoviesService {

  constructor(
    private router: Router,
    private store: Store<StateModel>
  ) {}

  selectGenre(genre: string) {
    this.store.dispatch(
      new SelectGenreAction(genre)
    );

    this.router.navigate(['movies', genre]);
  }

  selectMovie(movie: Movie) {
    this.store.dispatch(
      new SelectMovieAction(movie)
    );

    this.router.navigate(['movies', movie.genre, movie.title]);
  }

}
