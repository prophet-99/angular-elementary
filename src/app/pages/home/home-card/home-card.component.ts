import { Component, input } from '@angular/core';

import { type MovieDb } from '@core/models/movie.model';

@Component({
  selector: 'app-home-card',
  imports: [],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.scss',
})
export class HomeCardComponent {
  movie = input<MovieDb>();
}
