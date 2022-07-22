import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutFormComponent } from './components/shopping-cart/checkout-form/checkout-form.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { AddedItemToShoppingCartComponent } from './components/added-item-to-shopping-cart/added-item-to-shopping-cart.component';
import {
  NoopAnimationsModule,
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModifiedShoppingCartComponent } from './components/modified-shopping-cart/modified-shopping-cart.component';
import { ShoppingCartitemComponent } from './components/shopping-cart/cartitem/shoppingcartitem.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    ProductItemDetailComponent,
    ShoppingCartComponent,
    CheckoutFormComponent,
    OrderConfirmationComponent,
    AddedItemToShoppingCartComponent,
    NavbarComponent,
    ModifiedShoppingCartComponent,
    ShoppingCartitemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
