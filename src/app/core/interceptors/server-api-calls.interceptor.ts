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
    @Inject('I18N_TRANSLATIONS_PATH') private I18N_TRANSLATIONS_PATH: string,
    private authorization: AuthorizationService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let apiReq: HttpRequest<any>;

    if (!req.url.includes(this.I18N_TRANSLATIONS_PATH)) {
      apiReq = req.clone({
        url: `${this.BASE_API_URL}${req.url}`,
        headers: req.headers.set(
          'Authorization',
          this.authorization.getAuthorizationToken() || ''
        )
      });

      return next.handle(apiReq);
    }
    return next.handle(req);
  }
}
