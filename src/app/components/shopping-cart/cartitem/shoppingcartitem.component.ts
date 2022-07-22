import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-shoppingcartitem',
  templateUrl: './shoppingcartitem.component.html',
  styleUrls: ['./shoppingcartitem.component.css'],
})
export class ShoppingCartitemComponent implements OnInit {
  @Input() cartItem: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    url: '',
    quantity: 0,
  };
  @Output() removeItemFromShoppingCart: EventEmitter<Product> =
    new EventEmitter();
  @Output() changedQuantity: EventEmitter<Product> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  getQuantity(item: Product): Array<number> {
    let resultArray: Array<number> = [];
    for (
      let index = 1;
      index <= parseInt(item.quantity as unknown as string) + 4;
      index++
    )
      resultArray.push(index);
    return resultArray;
  }

  changeQuantity(cartItem: Product, newQuantity: number) {
    console.log(newQuantity);
    cartItem.quantity = newQuantity;
    this.changedQuantity.emit(cartItem);
  }
}
