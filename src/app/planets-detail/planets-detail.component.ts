import {
  Component,
  Input,

} from '@angular/core';

import {
  Planet,
  PlanetsService
} from '../shared';

@Component({
  selector: 'ps-planets-detail',
  templateUrl: 'src/app/planets-detail/planets-detail.component.html'
})
export class PlanetsDetailComponent {

  @Input() planetIndex: number;
  planet: Planet;

  constructor(
    private planetsService: PlanetsService
  ) {}

  ngOnInit() {
    this.planet = this.planetsService.planets[this.planetIndex];
  }
}
