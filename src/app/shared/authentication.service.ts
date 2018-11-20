import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UserToken } from "../model/user-token";
import { UserGetDto } from "../model/UserGetDto";
import { environment } from "../environments/conf";
import { HelperFunctions } from "./functions";
import { HttpClient, HttpResponse } from "@angular/common/http"
import { Observable } from "rxjs/internal/Observable";
import { TokenWithUser } from "../model/TokenWithUser";

@Injectable()
export class AuthenticationService {
    constructor(private _http: HttpClient, private router: Router) { }

    public getToken(): string {
        return localStorage.getItem('token');
    }
    loginResponse: UserToken;
    userGetDto: UserGetDto;
    public isAuthenticated(): boolean {
        if (localStorage.getItem('token') == null)
            return false;
        else
            return true;
        // we can also check expiration and dont forget the registration TC
    }

    login(loginForm): Observable<TokenWithUser> {//: Observable<HttpResponse<any>> {
        return this._http
            .post<TokenWithUser>(environment.serverUrl + '/auth/login', loginForm);

    }

    register(registerForm): Observable<TokenWithUser> {
        return this._http
            .post<TokenWithUser>(environment.serverUrl + '/auth/register', registerForm);
    }
    logout() {
        localStorage.removeItem("token");
        localStorage.removeItem('currentUser');
        this.router.navigate(['login']);
    }

}