import { Component } from '@angular/core';

import {
  Planet,
  PlanetsService
} from '../shared';

@Component({
  selector: 'ps-planets-list',
  templateUrl: 'src/app/planets-list/planets-list.component.html',
})
export class PlanetsListComponent {
  planets: Planet[];

  constructor(planetsService: PlanetsService) {
    this.planets = planetsService.planets;
  }
}
