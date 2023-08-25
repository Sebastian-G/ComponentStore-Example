import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Movie } from '../models/movie.model';
import { useOverviewStore } from '../store/overview.token';

@Component({
  selector: 'app-second-child',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div *ngFor="let movie of overviewFacade.moviesReverseSorted$ | async">
    <h4>{{movie.title}} ({{movie.id}})</h4>
    <img [src]="movie.url" [alt]="movie.title" [ngStyle]="{ maxHeight: '100px'}" />
  </div>
  `,
})
export class SecondChildComponent {
  public readonly overviewFacade = useOverviewStore();
}
