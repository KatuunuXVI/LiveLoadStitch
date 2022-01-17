import { Injectable } from '@angular/core';
import {Auth} from '@aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  getCurrentUserInfo(): any {
    return Auth.currentUserInfo();
  }

  updatePassword(oldPass, newPass): any {
    return Auth.currentAuthenticatedUser()
        .then(user => {
          return Auth.changePassword(user, oldPass, newPass);
        });
  }

  updateEmail(newEmail): any {
    return Auth.currentAuthenticatedUser().then(user => {
      return Auth.updateUserAttributes(user, {
        email: newEmail,
      });
    });
  }

  constructor() { }
}
