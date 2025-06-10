import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';

import { interval } from 'rxjs';

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
export class HomeComponent implements OnInit {
  private omdbMoviesService = inject(OmdbMoviesService);
  // movies!: Movie[];
  movies = signal<Movie[]>([]);
  counter!: Signal<number>;

  constructor() {
    // *toSignal: Observable -> Signal
    const interval$ = interval(1_000);
    this.counter = toSignal(interval$, {
      initialValue: 0,
      manualCleanup: true,
    });

    const count = signal(0);
    const count$ = toObservable(count);
    count$.subscribe({
      next: (m) => console.log('toObservable', m),
    });
    count.set(1);
    count.set(2);
    count.set(3);
  }

  ngOnInit() {
    // this.omdbMoviesService
    //   .getPromiseMovies()
    //   .then(console.log)
    //   .catch(console.log);

    this.omdbMoviesService.getObservableMovies().subscribe((localMovies) => {
      // this.movies = movies;
      this.movies.set(localMovies);
    });
  }

  getSelectedMovie(id: string) {
    console.log('Selected movie ID:', id);
  }
}
