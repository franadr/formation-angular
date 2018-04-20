import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import { Superhero } from '../models/superhero';
import { environment } from './../../environments/environment';
import { MOCK_HEROES } from '../models/mock-heroes';

@Injectable()
export class MockHeroService {

    getHeroes(): Superhero[] {
        return MOCK_HEROES;
    }

}
