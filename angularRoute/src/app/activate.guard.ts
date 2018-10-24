import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from './user.service';

@Injectable()
export class ActivateGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userService.isAdminRights()) {
      return true;
     } else { alert('you do not have permission, Redirecting to Home');
       this.router.navigate(['Home']);
     }
  }

  }

