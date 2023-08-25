import type { Movie } from '../models/movie.model';

export interface OverviewState {
  movies: Movie[];
}

export const getDefaultOverviewState = (): OverviewState =>
  ({ movies: [] } as OverviewState);
