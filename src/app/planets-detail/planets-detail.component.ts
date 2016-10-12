import {
  Component,
  Input,
  OnChanges,
  SimpleChanges
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
  countdownTillLiftOf = 0;
  rocketsStarted = 0;

  constructor(
    private planetsService: PlanetsService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    // Check if observalbe is running
    const index = changes['planetIndex'].currentValue;
    this.planetsService.getPlanets()
      .subscribe(planets => this.planet = planets[index]);
  }

  startRocket() {
    const countdownTillLiftOf = 30;
    this.countdownTillLiftOf = countdownTillLiftOf;

    // store the observable in attr
    // e.g. this.rocket$
    this.planetsService.startJourneyToSun(this.planet)
      .subscribe(
        timeSinceStart => this.countdownTillLiftOf = countdownTillLiftOf - timeSinceStart.value - 1,
        error => console.error(error),
        () => this.rocketsStarted++
      );
  }
}
