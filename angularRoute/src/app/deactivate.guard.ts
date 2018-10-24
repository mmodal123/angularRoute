import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MerchantComponent } from './merchant/merchant.component';

@Injectable()
export class DeactivateGuard implements CanDeactivate<MerchantComponent> {
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return window.confirm('Are you sure to leave the page ?');
  }
}
