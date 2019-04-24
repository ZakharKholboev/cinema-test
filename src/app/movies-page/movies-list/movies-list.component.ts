import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Movie } from '../../shared/models/movie.model';
import { StateModel } from '../../shared/models/state.model';
import { FilteredMoviesAction } from '../../shared/ngrx-store/actions/filtered-movies.action';
import { MoviesService } from '../../shared/services/movies.service';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  filteredMovies: Movie[] = [];

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private store: Store<StateModel>
  ) {}

  ngOnInit() {
    this.moviesService.selectGenre(
      this.route.snapshot.params['genre']
    );

    this.store.select('movies').subscribe((movies: Movie[]) => {
      this.store.dispatch(
        new FilteredMoviesAction(
          this.filterMovies(
            movies,
            this.route.snapshot.params['genre']
          )
        )
      );

      this.store.select('selectedGenre').subscribe((selectedGenre: string) => {
        this.store.dispatch(
          new FilteredMoviesAction(
            this.filterMovies(
              movies,
              selectedGenre
            )
          )
        );
      });
    });

    this.store.select('filteredMovies').subscribe((filteredMovies: Movie[]) => {
      this.filteredMovies = filteredMovies;
    });
  }

  filterMovies(movies: Movie[], genre: string) {
    if (genre === 'All') return movies;

    return movies.filter((movie: Movie) => movie.genre === genre);
  }

  selectMovie(movie: Movie) {
    this.moviesService.selectMovie(movie);
  }

}
