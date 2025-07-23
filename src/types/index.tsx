export interface IMovie {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  original_language: string;
  release_date: string;
  adult: boolean;
  genre_ids: number[];
  without_genres?: string;
}

export interface MovieResponse {
  results: IMovie[];
  total: number;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface Users {
  name: string;
  email: string;
  picture: string;
}
