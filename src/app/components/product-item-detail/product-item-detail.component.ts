import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { AddedItemToShoppingCartComponent } from '../added-item-to-shopping-cart/added-item-to-shopping-cart.component';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  protected id = 0;
  protected quantity = 1;
  protected currentProduct: Product = {
    id: -1,
    name: '',
    price: -1,
    url: '',
    description: '',
    quantity: 1,
  };
  constructor(
    private route: ActivatedRoute,
    private httpRequestService: HttpRequestService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    //Get all products and fetch the rightful one
    this.httpRequestService.getAllProducts().subscribe((product) => {
      for (let index = 0; index < product.length; index++) {
        if (product[index].id == this.id) this.currentProduct = product[index];
      }
    });
  }

  orderProduct(): void {
    const newShoppingCartItem = {
      id: this.currentProduct.id,
      name: this.currentProduct.name,
      price: this.currentProduct.price,
      url: this.currentProduct.url,
      description: this.currentProduct.description,
      quantity: parseInt(this.quantity as unknown as string),
    } as Product;

    this.httpRequestService.addProductToShoppingCart(newShoppingCartItem);

    this.dialog.open(AddedItemToShoppingCartComponent, {
      height: '200',
      width: '200',
    });
  }
}
