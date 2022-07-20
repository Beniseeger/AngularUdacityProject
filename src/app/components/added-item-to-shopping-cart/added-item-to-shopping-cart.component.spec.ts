import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedItemToShoppingCartComponent } from './added-item-to-shopping-cart.component';

describe('AddedItemToShoppingCartComponent', () => {
  let component: AddedItemToShoppingCartComponent;
  let fixture: ComponentFixture<AddedItemToShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedItemToShoppingCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddedItemToShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
