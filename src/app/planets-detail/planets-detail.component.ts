import {
  Component,
  Input,
  OnChanges
} from '@angular/core';

import {
  Planet,
  PlanetsService
} from '../shared';

@Component({
  selector: 'ps-planets-detail',
  templateUrl: 'src/app/planets-detail/planets-detail.component.html'
})
export class PlanetsDetailComponent implements OnChanges {

  @Input() planetIndex: number = 0;
  planet: Planet;

  constructor(
    private planetsService: PlanetsService
  ) {}

  ngOnChanges() {
    this.planet = this.planetsService.planets[this.planetIndex];
  }
}
