import { Injectable } from '@angular/core';
import { UserInformation } from '../models/UserInformation';

@Injectable({
  providedIn: 'root',
})
export class UserInformationService {
  private userInformation: UserInformation = {
    fullName: '',
    address: '',
    creditcard: 0,
  };
  constructor() {}

  setUser(user: UserInformation): void {
    this.userInformation = user;
  }

  getUser(): UserInformation {
    return this.userInformation;
  }
}
