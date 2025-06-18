import { Component, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { OmdbMoviesService } from '@core/services/omdb-movies.service';
import { type Movie } from '@core/models/movie.model';
import { HomeCardComponent } from './home-card/home-card.component';

@Component({
  selector: 'app-home',
  imports: [HomeCardComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private omdbMoviesService = inject(OmdbMoviesService);
  movies = toSignal(this.omdbMoviesService.getObservableMovies());

  constructor() {}

  getSelectedMovie(id: string) {
    console.log('Selected movie ID:', id);
  }

  selectPokemon() {}
}
