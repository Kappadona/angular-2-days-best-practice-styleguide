import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  Input
} from '@angular/core';

import {
  Planet,
  PlanetsService
} from '../shared';

@Component({
  selector: 'ps-planets-list',
  templateUrl: 'src/app/planets-list/planets-list.component.html'
})
export class PlanetsListComponent implements OnInit {
  @Output() planetClick = new EventEmitter<Planet>();
  @Input() rocketsStarted: number;
  planets: Planet[];
  selectedPlanet: Planet;

  constructor(
    private planetsService: PlanetsService
  ) { }

  ngOnInit() {
    this.planetsService.getPlanets()
      .subscribe(planets => this.planets = planets);
  }

  planetClicked(planet: Planet) {
    this.planetClick.emit(planet);

    this.selectedPlanet = planet;
  }
}
