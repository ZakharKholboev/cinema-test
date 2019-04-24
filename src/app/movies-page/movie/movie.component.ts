import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Movie } from '../../shared/models/movie.model';
import { StateModel } from '../../shared/models/state.model';
import { MoviesService } from '../../shared/services/movies.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie: Movie;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private store: Store<StateModel>
  ) {}

  ngOnInit() {
    this.store.select('selectedMovie').subscribe((selectedMovie: Movie) => {
      if (!selectedMovie) {
        this.chooseSelectedMovie();
        return;
      }
      this.movie = selectedMovie;
    });
  }

  chooseSelectedMovie() {
    this.store.select('movies').subscribe((movies: Movie[]) => {
      this.moviesService.selectMovie(
        movies.find((movie: Movie) => movie.title === this.route.snapshot.params['movie'])
      );
    });
  }

}
