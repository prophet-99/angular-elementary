export interface MovieDbResponse {
  page: number;
  results: MovieDb[];
  total_pages: number;
  total_results: number;
}

export interface MovieDbNowPlayingResponse {
  dates: MovieDbDates;
  page: number;
  results: MovieDb[];
  total_pages: number;
  total_results: number;
}

export interface MovieDbDates {
  maximum: string;
  minimum: string;
}

export interface MovieDb {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
