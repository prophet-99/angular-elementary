import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {
  type MovieDbNowPlayingResponse,
  type MovieDbResponse,
} from '@core/models/movie.model';
import { environment } from '@environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TheMovieDbService {
  // DI
  private readonly http = inject(HttpClient);
  //LOCALE
  baseURL = `${environment.baseApiUrlTheMovieDB}/movie`;

  getNowPlayingMovies(): Observable<MovieDbNowPlayingResponse> {
    return this.http.get<MovieDbNowPlayingResponse>(
      `${this.baseURL}/now_playing?language=es-ES&page=1`
    );
  }

  getPopularMovies(page = 1): Observable<MovieDbResponse> {
    return this.http.get<MovieDbResponse>(
      `${this.baseURL}/popular?language=es-ES&page=${page}`
    );
  }
}
