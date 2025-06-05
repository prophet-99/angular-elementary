import { Component, Input } from '@angular/core';

import { type Movie } from '@core/models/movie.model';

@Component({
    selector: 'app-home-card',
    imports: [],
    templateUrl: './home-card.component.html',
    styleUrl: './home-card.component.css'
})
export class HomeCardComponent {
  @Input() movie!: Movie;
}
