import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';

import { map } from 'rxjs';

import { TheMovieDbService } from '@core/services/the-movie-db.service';
import { HomeMoviesComponent } from './home-movies/home-movies.component';

const NG_IMPORTS = [DatePipe];
const IMPORTS = [HomeMoviesComponent];

@Component({
  selector: 'app-home',
  imports: [...NG_IMPORTS, ...IMPORTS],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // DI
  private readonly theMovieDBService = inject(TheMovieDbService);
  // LOCAL
  private nowPlayinMovies$ = this.theMovieDBService
    .getNowPlayingMovies()
    .pipe(map(({ results }) => results[0]));
  selectedMovie = toSignal(this.nowPlayinMovies$);
}
