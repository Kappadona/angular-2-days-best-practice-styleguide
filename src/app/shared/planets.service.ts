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
  planets: Planet[] = [
    {name: 'Merkur', sunDistance: 58},
    {name: 'Venus', sunDistance: 108},
    {name: 'Erde', sunDistance: 150},
    {name: 'Mars', sunDistance: 228},
    {name: 'Jupiter', sunDistance: 778},
    {name: 'Saturn', sunDistance: 1433},
    {name: 'Uranus', sunDistance: 2872},
    {name: 'Neptun', sunDistance: 4495}
  ];

  constructor(private http: Http) {}

  getPlanets() {
    return this.http.get('planets.json')
      .map(response => response.json());
  }

  startJourneyToSun(planet: Planet) {
    return Observable.interval(1000 /* ms */)
      .timeInterval()
      .take(30);
  }
}
