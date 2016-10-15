import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/timeInterval';

import { Planet } from './planet.model';

@Injectable()
export class PlanetsService {

  countdownDurationLiftOf = 3;

  constructor(private http: Http) {}

  getPlanets() {
    return this.http.get('planets.json')
      .map(response => response.json());
  }

  startJourneyToSun() {
    const countdownDuration: number = this.countdownDurationLiftOf;

    return Observable.interval(1000 /* ms */)
      .timeInterval()
      .take(countdownDuration);
  }

  pollutePlanet (planet: Planet) {
    return Observable.interval(1000 /* ms */)
      .timeInterval()
      .take(planet.storageInTons / planet.tonsOfThrashPerSec)
  }
}
