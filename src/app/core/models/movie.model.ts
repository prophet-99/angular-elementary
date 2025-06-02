export interface MovieResponse {
  Response: string;
  Search: Movie[];
  totalResults: string;
}

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
