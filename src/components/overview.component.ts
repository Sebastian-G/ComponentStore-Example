import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { provideComponentStore } from '@ngrx/component-store';
import { FirstChildComponent } from './children/first-child.component';
import { OverviewStore } from './store/overview.store';
import { useOverviewStore } from './store/overview.token';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, FirstChildComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideComponentStore(OverviewStore)],
  template: `
    <h2>Overview</h2>
    Number of Movies: <pre>{{overviewFacade.numberOfMovies$ | async | json}}</pre>
    
    <app-first-child />
  `,
})
export class OverviewComponent {
  public readonly overviewFacade = useOverviewStore<OverviewComponent>();
}
