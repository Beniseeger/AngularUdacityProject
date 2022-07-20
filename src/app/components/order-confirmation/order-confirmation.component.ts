import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInformationService } from 'src/app/services/user-information.service';
import { UserInformation } from 'src/app/models/UserInformation';

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
    private route: ActivatedRoute,
    private userInformationService: UserInformationService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.userInformationService.getUser();
  }
}
