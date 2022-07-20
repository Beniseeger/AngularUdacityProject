import { Component, OnInit } from '@angular/core';
import { ShoppingCardItem } from 'src/app/models/ShoppingCartItem';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { Product } from '../../models/Product';
import { MatDialog } from '@angular/material/dialog';
import { AddedItemToShoppingCartComponent } from '../added-item-to-shopping-cart/added-item-to-shopping-cart.component';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent implements OnInit {
  itemCardList: Product[] = [];
  quantity = 1;
  constructor(
    private httpRequestService: HttpRequestService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.httpRequestService.getAllProducts().subscribe((data) => {
      for (let index = 0; index < data.length; index++) {
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
      quantity: parseInt(this.quantity as unknown as string),
    } as ShoppingCardItem;

    this.httpRequestService.addProductToShoppingCart(newShoppingCartItem);

    this.dialog.open(AddedItemToShoppingCartComponent, {
      height: '200',
      width: '200',
    });
  }
}
