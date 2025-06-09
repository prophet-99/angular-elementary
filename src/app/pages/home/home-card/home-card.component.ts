import {
  Component,
  EventEmitter,
  inject,
  Input,
  input,
  output,
  Output,
} from '@angular/core';

import { type Movie } from '@core/models/movie.model';
import { HomeStateService } from '../state/home-state.service';

@Component({
  selector: 'app-home-card',
  imports: [],
  standalone: true,
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css',
})
export class HomeCardComponent {
  private homeStateService = inject(HomeStateService);
  // @Input() movie!: Movie;
  movie = input.required<Movie>({
    alias: 'movieAlias',
  });
  // @Output() movieSelected = new EventEmitter<string>();
  movieSelected = output<string>();

  emitSelectedMovie() {
    this.movieSelected.emit(this.movie().imdbID || '');

    this.homeStateService.selectedMovie.emit(this.movie());
  }
}
