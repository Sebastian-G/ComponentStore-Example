import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Movie } from '../models/movie.model';
import { useOverviewStore } from '../store/overview.token';
import { SecondChildComponent } from './second-child.component';

@Component({
  selector: 'app-first-child',
  standalone: true,
  imports: [CommonModule, SecondChildComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <button (click)="onAddMovieClicked()">Add Movie</button>

  <app-second-child />
  `,
})
export class FirstChildComponent {
  public readonly overviewFacade = useOverviewStore();

  exampleCounter = signal(0);

  onAddMovieClicked() {
    this.exampleCounter.update((i) => i + 1);
    this.overviewFacade.addMovieAndLoadImage({
      title: 'Just a Movie',
      id: this.exampleCounter().toString(),
    } as Movie);
  }
}
