import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions, Request, RequestMethod } from "@angular/http";
import 'rxjs/add/operator/map';
import { Router } from "@angular/router";
import { environment } from '../environments/conf';
import { UserToken } from '../model/user-token';
import { HttpClient, HttpResponse } from "@angular/common/http"
@Injectable()
export class AuthenticationService {
    constructor(private _http: HttpClient,private router:Router) { }

    public getToken(): string {
        return localStorage.getItem('token');
    }
    loginResponse:UserToken;
    public isAuthenticated(): boolean {
        if(localStorage.getItem('token') == null )
            return false;
        else
            return true;
        // we can also check expiration and dont forget the registration TC
      }

    login(loginForm){//: Observable<HttpResponse<any>> {
         return this._http
        .post<UserToken>(environment.serverUrl + '/auth/login',loginForm)
        .subscribe(data => {
            this.loginResponse = data;
          }, error => { 
            HelperFunctions.DisplayToastMessageError(' An error occurred');
          });
       // return this.http.post(conf.serverUrl + '/auth/login', loginForm, {observe:'response'})

    }
    register(registerForm) {
        return this._http
       .post(conf.serverUrl+'/auth/register',registerForm)
       .map((response:Response)=>response.json());
   }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem("token");
        localStorage.removeItem('currentUser');
        this.router.navigate(['login']);
    }

}