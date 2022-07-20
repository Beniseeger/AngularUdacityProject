import { Component, OnInit } from '@angular/core';
import { UserInformationService } from 'src/app/services/user-information.service';
import { UserInformation } from 'src/app/models/UserInformation';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { HttpRequestService } from 'src/app/services/http-request.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css'],
})
export class OrderConfirmationComponent implements OnInit {
  protected currentUser: UserInformation = {
    fullName: '',
    address: '',
    creditcard: 0,
  };

  constructor(
    private userInformationService: UserInformationService,
    private httpRequestService: HttpRequestService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.userInformationService.getUser();
    this.httpRequestService.clearShoppingCart();
  }
}
