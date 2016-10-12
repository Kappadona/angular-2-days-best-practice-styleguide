import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <ps-planets-list></ps-planets-list>
  `
})
export class AppComponent {
  title = 'my app works';
}
