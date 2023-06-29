import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpInterceptor,
  HttpHandler,
  HttpEventType,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Moidfy or log the outgoing request
    const modifiedReq = req.clone({
      withCredentials: true,
    });

    return next.handle(modifiedReq);
    // .pipe(
    //   tap((data) => {
    //     if (data.type === HttpEventType.Sent) {
    //       console.log('Request was sent to the server');
    //     }

    //     if (data.type === HttpEventType.Sent) {
    //       console.log('Response from the API');
    //     }
    //   })
    // )
  }
}
