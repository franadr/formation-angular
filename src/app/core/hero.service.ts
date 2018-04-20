import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Superhero } from '../models/superhero';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {

  constructor(private _http: HttpClient) {
  }

  getHeroes(): Observable<Superhero[]> {
        return this._http.get<Superhero[]>(`${environment.backendUrl}/superheroes`)
          .map((heroes: Superhero[]) => heroes.filter(hero => hero.history.length > 0));
    }
  getHero(idHero: number): Observable<Superhero> {
    return this._http.get<Superhero>(`${environment.backendUrl}/superheroes/${idHero}`);
  }
  addHero(heroInformation): Observable<Superhero> {
    return this._http.post<Superhero>(`${environment.backendUrl}/superheroes`, heroInformation);
  }

}
