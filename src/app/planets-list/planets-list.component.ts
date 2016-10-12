import {
  Component,
  Output,
  EventEmitter,
} from '@angular/core';

import {
  Planet,
  PlanetsService
} from '../shared';

@Component({
  selector: 'ps-planets-list',
  templateUrl: 'src/app/planets-list/planets-list.component.html',
})
export class PlanetsListComponent {

  @Output() planetClick = new EventEmitter<number>();
  planets: Planet[];

  constructor(planetsService: PlanetsService) {
    this.planets = planetsService.planets;
  }

  planetClicked(index: number) {
    this.planetClick.emit(index);
  }
}
