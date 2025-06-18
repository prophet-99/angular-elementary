import { Component, inject, input, output } from '@angular/core';

import { type Movie } from '@core/models/movie.model';
import { HomeEventBusService } from '../event-bus/home.event-bus.service';

@Component({
  selector: 'app-home-card',
  imports: [],
  standalone: true,
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css',
})
export class HomeCardComponent {
  private homeEventBusService = inject(HomeEventBusService);
  movie = input.required<Movie>({
    alias: 'movieAlias',
  });
  movieSelected = output<string>();

  emitSelectedMovie() {
    this.movieSelected.emit(this.movie().imdbID || '');

    this.homeEventBusService.emitMovie(this.movie());
  }
}
