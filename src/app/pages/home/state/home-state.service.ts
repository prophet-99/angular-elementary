import { EventEmitter, Injectable } from '@angular/core';

import { type Movie } from '@core/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class HomeStateService {
  selectedMovie = new EventEmitter<Movie>();
}
