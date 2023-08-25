import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { getDefaultOverviewState } from './overview.state';
import type { OverviewState } from './overview.state';
import { Movie } from '../models/movie.model';
import { shareReplay } from 'rxjs';

@Injectable()
export class OverviewStore extends ComponentStore<OverviewState> {
  public readonly movies$ = this.select((s) => s.movies);
  public readonly numberOfMovies$ = this.select(
    this.movies$,
    (movies) => movies.length
  ).pipe(shareReplay());
  public readonly addMovie = this.updater((s: OverviewState, movie: Movie) => ({
    ...s,
    movies: [...s.movies, movie],
  }));

  constructor() {
    // set initial values
    super(getDefaultOverviewState());
  }
}
