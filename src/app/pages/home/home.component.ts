import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { OmdbMoviesService } from '@core/services/omdb-movies.service';
import { type Movie } from '@core/models/movie.model';
import { HomeCardComponent } from './home-card/home-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeCardComponent, JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private omdbMoviesService = inject(OmdbMoviesService);
  // movies!: Movie[];
  movies = signal<Movie[]>([]);
  firstMovie = computed(() => {
    const scMovies = this.movies();
    return scMovies[0];
  });
  // TODO: Update Version
  // lastMovie = linkedSignal(() => {
  //   onst scMovies = this.movies();
  //   return scMovies[0];
  // });

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
}
