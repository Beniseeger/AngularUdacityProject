import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInformationService } from 'src/app/services/user-information.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  fullName: string = '';
  address: string = '';
  creditcard: string = '';

  constructor(
    private userInformationService: UserInformationService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.userInformationService.setUser({
      fullName: this.fullName,
      address: this.address,
      creditcard: parseInt(this.creditcard),
    });

    this._router.navigateByUrl('/order-confirmation');
  }
}
