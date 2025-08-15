import {
  Component,
  computed,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { map } from 'rxjs';

import { TheMovieDbService } from '@core/services/the-movie-db.service';
import { HomeCardComponent } from '@pages/home/home-card/home-card.component';
import { JsonPipe } from '@angular/common';

const IMPORTS = [HomeCardComponent];

@Component({
  selector: 'app-movies',
  imports: [...IMPORTS, JsonPipe],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent {
  // DI
  private readonly theMovieDBService = inject(TheMovieDbService);
  // LOCAL
  searchInputRef =
    viewChild.required<ElementRef<HTMLInputElement>>('searchInput');
  searchTerm = signal('');
  popularMovies = toSignal(
    this.theMovieDBService
      .getPopularMovies()
      .pipe(map(({ results }) => results))
  );
  filteredMovies = computed(() => {
    const searchValue = this.searchTerm();

    return this.popularMovies()?.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  onSearchChange() {
    const value = this.searchInputRef().nativeElement.value;
    this.searchTerm.set(value);
  }
}
