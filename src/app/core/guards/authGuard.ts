import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  return inject(CanActivateAuthGuard).canActivate(route, state);
};

@Injectable()
export class CanActivateAuthGuard {

  constructor(private readonly authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(this.authService.getAuthenticationStatus());

  }
}
