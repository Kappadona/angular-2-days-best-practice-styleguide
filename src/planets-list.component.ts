import { Component } from '@angular/core';

import { PlanetsService } from './planets.service';
import { Planet } from './planet.model';

@Component({
  selector: 'ps-planets-list',
  templateUrl: 'src/planets-list.component.html',
  providers: [PlanetsService]
})
export class PlanetsListComponent {
  planets: Planet[];

  constructor(planetsService: PlanetsService) {
    this.planets = planetsService.planets;
  }
}
