import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  isAdminRights(): boolean {
    return false;
  }

  isChildRights(): boolean {
    return true;
  }


}
