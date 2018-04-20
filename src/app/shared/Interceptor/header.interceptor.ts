import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class AddHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser){
      const newHeaders = { headers: req.headers.set('Authorization', `Bearer ${currentUser.token}`) }
      const clonedRequest = req.clone(newHeaders);
      // Pass the cloned request instead of the original request to the next handle
      return next.handle(clonedRequest);
    } else {
      const clonedRequest = req.clone();
      return next.handle(req.clone());
    }
  }
}
