import { Injectable, Inject } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthorizationService } from '../services';

@Injectable()
export class ServerApiCallsInterceptor implements HttpInterceptor {
  constructor(
    @Inject('BASE_API_URL') private BASE_API_URL: String,
    private authorization: AuthorizationService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiReq = req.clone({
      url: `${this.BASE_API_URL}${req.url}`,
      headers: req.headers.set(
        'Authorization',
        this.authorization.getAuthorizationToken() || ''
      )
    });
    return next.handle(apiReq);
  }
}
