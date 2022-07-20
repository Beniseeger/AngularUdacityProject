import { Component, OnInit } from '@angular/core';
import { ShoppingCardItem } from 'src/app/models/ShoppingCartItem';
import { HttpRequestService } from 'src/app/services/http-request.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  shoppingCartItems: ShoppingCardItem[] = [];
  totalCosts: number = 0;
  constructor(private httpRequestService: HttpRequestService) {}

  ngOnInit(): void {
    this.shoppingCartItems = this.httpRequestService.getShoppingCartItems();
    this.calculateTotalCosts();
  }

  clearShoppingCart(): void {
    this.shoppingCartItems = [];
    this.httpRequestService.clearShoppingCart();
    this.calculateTotalCosts();
  }

  removeItemFromShoppingCart(item: ShoppingCardItem): void {
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

  changedQuantity(item: ShoppingCardItem, value: number): void {
    this.httpRequestService.setQuantityForCartItem(
      item.id,
      parseInt(value as unknown as string)
    );
    this.calculateTotalCosts();
  }

  getQuantity(item: ShoppingCardItem): Array<number> {
    let resultArray: Array<number> = [];
    for (
      let index = 1;
      index <= parseInt(item.quantity as unknown as string) + 4;
      index++
    )
      resultArray.push(index);
    return resultArray;
  }
}