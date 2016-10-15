import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output
} from '@angular/core';

import {
  Planet,
  PlanetsService
} from '../shared';
import {Subscription} from "rxjs";

@Component({
  selector: 'ps-planets-detail',
  templateUrl: 'src/app/planets-detail/planets-detail.component.html'
})
export class PlanetsDetailComponent implements OnChanges {

  @Input() planet: Planet;
  @Output() rocketsStarted = new EventEmitter<number>();
  countdownTillLiftOf: number = 0;
  rocketsStartedNumber: number = 0;
  rocket$: Subscription;

  constructor(private planetsService: PlanetsService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.rocket$) {
      this.rocket$.unsubscribe();
    }
    this.countdownTillLiftOf = 0;

    this.planet = changes['planet'].currentValue;
  }

  startRocket() {
    this.countdownTillLiftOf = this.planetsService.countdownDurationLiftOf;

    this.rocket$ = this.planetsService.startJourneyToSun()
      .subscribe(
        timeSinceStart => this.countdownTillLiftOf = this.planetsService.countdownDurationLiftOf - timeSinceStart.value - 1,
        error => console.error(error),
        () => {
          this.rocketsStartedNumber++;
          this.rocketsStarted.emit(this.rocketsStartedNumber);
        }
      );
  }

  stopRocket() {
    this.rocket$.unsubscribe();
    this.countdownTillLiftOf = 0;

  }
}
