import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { firstValueFrom, map, Observable, tap } from 'rxjs';

import { type MovieResponse, type Movie } from '@core/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class OmdbMoviesService {
  private baseUrl = 'https://www.omdbapi.com';
  private http = inject(HttpClient);

  getPromiseMovies(): Promise<MovieResponse> {
    return firstValueFrom(
      this.http.get<MovieResponse>(
        `${this.baseUrl}/?s=Batman&page=1&apikey=689e4f8b`
      )
    );
    //* firstValueFrom: Observable -> Promise
  }

  getObservableMovies(): Observable<Movie[]> {
    return this.http
      .get<MovieResponse>(`${this.baseUrl}/?s=Batman&page=1&apikey=689e4f8b`)
      .pipe(
        tap((movieResponse) => {
          console.log(movieResponse);
          // -> Actualizar una variable interna
        }),
        map((response) => response.Search)
      );
  }
}
