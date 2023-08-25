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
  <pre>{{ overviewFacade.movies$ | async | json}}</pre>
  `,
})
export class SecondChildComponent {
  public readonly overviewFacade = useOverviewStore();
}
