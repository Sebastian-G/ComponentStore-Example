import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { OverviewComponent } from './components/overview.component';
import { HttpClientModule } from '@angular/common/http';
import { getOverviewStateStream } from './components/store/overview.token';
import { NEVER } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, OverviewComponent, HttpClientModule],
  template: `
    <h1>Hello {{ name }} 👋</h1>
    <app-overview />

    <pre>Overview Store State: {{ hackToState$ | async | json }}</pre>
  `,
})
export class App {
  name = 'Alberto';
  public readonly hackToState$ = NEVER;
  // TODO: uncomment to see what will happen if you try to access the Store above the component!
  //   getOverviewStateStream();
}

bootstrapApplication(App);
