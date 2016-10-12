import {
  Component,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

import {
  Planet,
  PlanetsService
} from '../shared';

@Component({
  selector: 'ps-planets-list',
  templateUrl: 'src/app/planets-list/planets-list.component.html',
})
export class PlanetsListComponent implements OnInit {

  @Output() planetClick = new EventEmitter<number>();
  planets: Planet[];

  constructor(
    private planetsService: PlanetsService
  ) { }

  ngOnInit() {
    this.planetsService.getPlanets()
      .subscribe(planets => this.planets = planets);
  }

  planetClicked(index: number) {
    this.planetClick.emit(index);
  }
}
