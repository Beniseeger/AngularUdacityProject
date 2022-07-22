import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-modified-shopping-cart',
  templateUrl: './modified-shopping-cart.component.html',
  styleUrls: ['./modified-shopping-cart.component.css'],
})
export class ModifiedShoppingCartComponent implements OnInit {
  @Input() item: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    url: '',
    quantity: 0,
  };

  dialogText: string = '';

  constructor() {}

  ngOnInit(): void {}
}
