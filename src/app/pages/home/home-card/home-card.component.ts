import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';

import { type MovieDb } from '@core/models/movie.model';
import { MovieDbThumbPipe } from '@shared/pipes/movie-db-thumb.pipe';

const NG_IMPORTS = [DecimalPipe];
const IMPORTS = [MovieDbThumbPipe];
@Component({
  selector: 'app-home-card',
  imports: [...NG_IMPORTS, ...IMPORTS],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.scss',
})
export class HomeCardComponent {
  movie = input<MovieDb>();
}
