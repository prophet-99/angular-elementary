import { EventEmitter, Injectable } from '@angular/core';

import { type Movie } from '@core/models/movie.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeEventBusService {
  // selectedMovie = new EventEmitter<Movie>(); // 😡
  private selectMovieSubject = new Subject<Movie>();
  selectMovie$ = this.selectMovieSubject.asObservable();

  emitMovie(movie: Movie) {
    this.selectMovieSubject.next(movie);
  }
}
