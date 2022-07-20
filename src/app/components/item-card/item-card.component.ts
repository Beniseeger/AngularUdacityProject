import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { MatDialog } from '@angular/material/dialog';
import { AddedItemToShoppingCartComponent } from '../added-item-to-shopping-cart/added-item-to-shopping-cart.component';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent implements OnInit {
  itemCardList: Product[] = [];
  constructor(
    private httpRequestService: HttpRequestService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.httpRequestService.getAllProducts().subscribe((data) => {
      for (let index = 0; index < data.length; index++) {
        data[index].quantity = 1;
        this.itemCardList.push(data[index]);
      }
    });
  }

  addItemToOrder(item: Product): void {
    const newShoppingCartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      url: item.url,
      description: item.description,
      quantity: parseInt(item.quantity as unknown as string),
    } as Product;

    this.httpRequestService.addProductToShoppingCart(newShoppingCartItem);

    this.dialog.open(AddedItemToShoppingCartComponent, {
      height: '200',
      width: '200',
    });
  }
}
