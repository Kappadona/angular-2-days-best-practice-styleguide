import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <ps-planets-list></ps-planets-list>
    <ps-planets-detail [planetIndex]="2"></ps-planets-detail>
  `
})
export class AppComponent {
  title = 'my app works';
}
