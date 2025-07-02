export interface IMovie {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
}

export interface MovieResponse {
  results: IMovie[];
  total: number;
}
