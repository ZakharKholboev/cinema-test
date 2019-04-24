import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Movie } from '../../shared/models/movie.model';
import { StateModel } from '../../shared/models/state.model';
import { MoviesService } from '../../shared/services/movies.service';

@Component({
  selector: 'app-head-panel',
  templateUrl: './head-panel.component.html',
  styleUrls: ['./head-panel.component.scss']
})
export class HeadPanelComponent implements OnInit {

  genres: string[] = [];
  selectedGenre: string;

  movies: Movie[] = [];

  searchField = new FormControl('');

  constructor(
    private moviesService: MoviesService,
    private store: Store<StateModel>
  ) {}

  ngOnInit(): void {
    this.store.select('genres').subscribe((genres: string[]) => {
      this.genres = genres;
    });

    this.store.select('selectedGenre').subscribe((selectedGenre: string) => {
      this.selectedGenre = selectedGenre;
    });

    this.store.select('movies').subscribe((movies: Movie[]) => {
      this.movies = movies;
    });

    this.searchField.valueChanges.subscribe((value: string) => {
      this.selectMovie();
    });
  }

  selectGenre(genre: string): void {
    this.moviesService.selectGenre(genre);
  }

  filterMovies(movies: Movie[]): Movie[] {
    return movies.filter((movie: Movie) => {
      return movie.title.toLowerCase().includes(this.searchField.value.toLowerCase());
    });
  }

  selectMovie() {
    const selectedMovie = this.movies.find((movie: Movie) => movie.title.toLowerCase() === this.searchField.value.toLowerCase());

    if (selectedMovie) {
      this.moviesService.selectMovie(selectedMovie);
    }
  }

}
