import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ACCESS_TOKEN, TOKEN_CYBERSOFT } from '../Shared/Util/configApp';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let accessToken:string = '';
        let tokenCybersoft = TOKEN_CYBERSOFT;

        if(localStorage.getItem(ACCESS_TOKEN)) {
            accessToken = localStorage.getItem(ACCESS_TOKEN)!;
        }

        const headerReq = req.clone({
            headers:new HttpHeaders({
                'Authorization' : 'Bearer '+ accessToken,
                'TokenCybersoft': tokenCybersoft
            })
        })
        return next.handle(headerReq)
    }
}