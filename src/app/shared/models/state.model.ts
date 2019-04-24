import { Movie } from './movie.model';
import { Ticket } from './ticket.model';


export interface StateModel {
  genres: string[];
  selectedGenre: string;
  movies: Movie[];
  filteredMovies: Movie[];
  selectedMovie: Movie | null;
  boughtTickets: Ticket[];
}
