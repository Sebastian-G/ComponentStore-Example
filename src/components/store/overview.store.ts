import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { getDefaultOverviewState } from './overview.state';
import type { OverviewState } from './overview.state';
import { Movie } from '../models/movie.model';
import { Observable, shareReplay, switchMap } from 'rxjs';
import { MovieService } from '../sevices/movie.service';

@Injectable()
export class OverviewStore extends ComponentStore<OverviewState> {
  public readonly movies$ = this.select((s) => s.movies);
  public readonly numberOfMovies$ = this.select(
    this.movies$,
    (movies) => movies.length
  ).pipe(shareReplay());
  public readonly moviesReverseSorted$ = this.select(this.movies$, (movies) =>
    movies.reverse()
  ).pipe(shareReplay());
  private readonly addMovie = this.updater(
    (s: OverviewState, movie: Movie) => ({
      ...s,
      movies: [...s.movies, movie],
    })
  );

  public readonly addMovieAndLoadImage = this.effect(
    (movie$: Observable<Movie>) =>
      movie$.pipe(
        switchMap((movie) => this.movieService.getImageForMovie(movie)),
        tapResponse(
          (movie: Movie) => {
            this.addMovie(movie);
          },
          (e: string) => console.debug('ERROR occured but was handled: ', e)
        )
      )
  );

  constructor(private readonly movieService: MovieService) {
    // set initial values
    super(getDefaultOverviewState());
  }
}
