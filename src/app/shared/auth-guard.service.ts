import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable()
export class AuthGuardService implements CanActivate {
  private userContext:UserContext
  constructor(public auth: AuthenticationService, public router: Router) {}
  canActivate(): boolean {
    this.userContext = new UserContext();
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}