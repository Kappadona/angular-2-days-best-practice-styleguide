import { Component } from '@angular/core';

interface Planet {
  name: string;
}

class PlanetsService {
  planets: Planet[] = [
    {name: 'Merkur'},
    {name: 'Venus'},
    {name: 'Erde'},
    {name: 'Mars'},
    {name: 'Jupiter'},
    {name: 'Saturn'},
    {name: 'Uranus'},
    {name: 'Neptun'}
  ];
}

@Component({
  selector: 'ps-planets-list',
  template: `
<ul>
  <li *ngFor="let planet of planets">
    {{planet.name}}
  </li>
</ul>
`,
  providers: [PlanetsService]
})
export class PlanetsListComponent {
  planets: Planet[];

  constructor(planetsService: PlanetsService) {
    this.planets = planetsService.planets;
  }
}
