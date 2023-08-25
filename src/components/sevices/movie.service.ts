import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable()
export class MovieService {
  private readonly baseUrl = 'https://cataas.com/';
  private readonly http = inject(HttpClient);

  getImageForMovie(movie: Movie): Observable<Movie> {
    return this.http
      .get<{
        url: string;
      }>(`${this.baseUrl}cat?json=true`)
      .pipe(
        map(({ url }) => ({ ...movie, url: `${this.baseUrl}${url}` } as Movie))
      );
  }
}
