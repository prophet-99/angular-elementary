import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';

import { type MovieDb } from '@core/models/movie.model';

const NG_IMPORTS = [DecimalPipe];
@Component({
  selector: 'app-home-card',
  imports: [...NG_IMPORTS],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.scss',
})
export class HomeCardComponent {
  movie = input<MovieDb>();
}
