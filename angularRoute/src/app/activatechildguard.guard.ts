import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';

@Injectable()
export class ActivatechildguardGuard implements CanActivateChild {
  constructor(private userService: UserService, private router: Router) {}
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if  (this.userService.isChildRights()) {
        return true;
      } else {
        alert('You do not have permission to view this page, redirecting to home');
          this.router.navigate(['Home']);
          return false;
      }
  }
}
