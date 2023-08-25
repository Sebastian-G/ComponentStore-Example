import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { OverviewComponent } from './components/overview.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, OverviewComponent],
  template: `
    <h1>Hello {{ name }} 👋</h1>
    <app-overview />
  `,
})
export class App {
  name = 'Alberto';
}

bootstrapApplication(App);
