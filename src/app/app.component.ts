import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <ps-planets-list (planetClick)="detailPlanetIndex = $event"></ps-planets-list>
    <ps-planets-detail [planetIndex]="detailPlanetIndex"></ps-planets-detail>
  `
})
export class AppComponent {
  title = 'my app works';
}
