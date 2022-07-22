import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/models/Product';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { ModifiedShoppingCartComponent } from '../modified-shopping-cart/modified-shopping-cart.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  shoppingCartItems: Product[] = [];
  totalCosts: number = 0;
  constructor(
    private httpRequestService: HttpRequestService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.shoppingCartItems = this.httpRequestService.getShoppingCartItems();
    this.calculateTotalCosts();
  }

  clearShoppingCart(): void {
    this.shoppingCartItems = [];
    this.httpRequestService.clearShoppingCart();
    this.calculateTotalCosts();
  }

  removeItemFromShoppingCart(item: Product): void {
    let modifiedDialog = this.dialog.open(ModifiedShoppingCartComponent, {
      height: '200',
      width: '200',
    });
    modifiedDialog.componentInstance.item = item;
    modifiedDialog.componentInstance.dialogText =
      'We have removed the item: ' + item.name + ' from your shopping cart';

    this.httpRequestService.removeItemFromShoppingCart(item);
    this.calculateTotalCosts();
  }

  calculateTotalCosts(): void {
    let costs = 0;
    this.shoppingCartItems.map((data) => {
      costs += data.quantity * data.price;
    });
    console.log(costs);
    this.totalCosts = costs;
  }

  changedQuantity(item: Product): void {
    let modifiedDialog = this.dialog.open(ModifiedShoppingCartComponent, {
      height: '200',
      width: '200',
    });

    modifiedDialog.componentInstance.dialogText =
      'You have modified: ' +
      item.name +
      '. You are now ordering ' +
      item.quantity +
      ' ' +
      item.name +
      "'s";

    this.httpRequestService.updateShoppingCartItemValues(item);
    this.calculateTotalCosts();
  }
}
