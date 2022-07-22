import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  private _baseUrl = './assets/data.json';

  private _shoppingCardStorage = window.localStorage;
  private _shoppingCardItems: Product[] = [];

  constructor(private http: HttpClient) {
    this._shoppingCardItems = JSON.parse(
      this._shoppingCardStorage.getItem('shopping_card') || '[]'
    );
    console.log(this._shoppingCardItems);
  }

  getAllProducts(): Observable<Product[]> {
    const result = this.http.get<Product[]>(this._baseUrl);
    return result;
  }

  addProductToShoppingCart(newShoppingCartItem: Product): void {
    let itemAlreadyExists = false;
    for (let index = 0; index < this._shoppingCardItems.length; index++) {
      if (this._shoppingCardItems[index].id == newShoppingCartItem.id) {
        this._shoppingCardItems[index].quantity =
          parseInt(
            this._shoppingCardItems[index].quantity as unknown as string
          ) + newShoppingCartItem.quantity;
        console.log(this._shoppingCardItems[index].quantity);
        itemAlreadyExists = true;
      }
    }

    itemAlreadyExists ? '' : this._shoppingCardItems.push(newShoppingCartItem);

    this._shoppingCardStorage.setItem(
      'shopping_card',
      JSON.stringify(this._shoppingCardItems)
    );
  }

  getShoppingCartItems(): Product[] | [] {
    return this._shoppingCardItems;
  }

  clearShoppingCart(): void {
    this._shoppingCardItems = [];
    this._shoppingCardStorage.clear();
  }

  removeItemFromShoppingCart(item: Product): void {
    const index = this._shoppingCardItems.indexOf(item, 0);
    this._shoppingCardItems.splice(index, 1);

    this._shoppingCardStorage.setItem(
      'shopping_card',
      JSON.stringify(this._shoppingCardItems)
    );
  }

  updateShoppingCartItemValues(updatedItem: Product): void {
    this._shoppingCardItems.map((item) => {
      if (item.id == updatedItem.id) item = updatedItem;
    });
    this._shoppingCardStorage.setItem(
      'shopping_card',
      JSON.stringify(this._shoppingCardItems)
    );
  }
}
