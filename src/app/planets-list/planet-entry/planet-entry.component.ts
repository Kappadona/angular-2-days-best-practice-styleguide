/**
 * Created by rkapp on 13.10.16.
 */
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {Planet} from "../../shared/planet.model";
import {PlanetsService} from "../../shared/planets.service";
import {Subscription} from "rxjs";

@Component ({
  selector: 'ps-planet-entry',
  templateUrl: 'src/app/planets-list/planet-entry/planet-entry.component.html',
  styleUrls: ['src/app/planets-list/planet-entry/planet-entry.component.css']
})
export class PlanetEntryComponent implements OnInit, OnChanges{

  @Input() planet: Planet;
  @Input() rocketsStarted: number;
  @Input() selectedPlanet: Planet;

  tonsOfTrash: number = 0;

  private pollutionSubscription: Subscription;

  constructor(private planetsService: PlanetsService) {}

  ngOnInit(): void {
    this.startPollution();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['rocketsStarted']) {
      const rocketStarted = changes['rocketsStarted'].currentValue;

      if(rocketStarted && this.planet === this.selectedPlanet) {
        this.tonsOfTrash = 0;

        if(this.pollutionSubscription) {
          this.pollutionSubscription.unsubscribe();
        }

        // pollution starts again
        this.startPollution();
      }
    }
  }

  private startPollution (): void {
    this.pollutionSubscription = this.planetsService.pollutePlanet(this.planet).subscribe(
      timeSinceLastCleaning => this.tonsOfTrash = (timeSinceLastCleaning.value + 1) * this.planet.tonsOfThrashPerSec
    );
  }
}