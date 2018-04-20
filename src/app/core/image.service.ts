import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeStyle } from '@angular/platform-browser';
import { environment } from './../../environments/environment';

@Injectable()
export class ImageService {

  constructor( private _sanitizer: DomSanitizer) {}

  getImageUrl(source: string): SafeStyle {
    const sourceWithHost = `${environment.backendUrl}${source}`;
    return this._sanitizer.bypassSecurityTrustStyle(`url(${sourceWithHost})`);
  }

}
