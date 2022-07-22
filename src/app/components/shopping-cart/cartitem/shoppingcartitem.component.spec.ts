import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartitemComponent } from './shoppingcartitem.component';

describe('CartitemComponent', () => {
  let component: ShoppingCartitemComponent;
  let fixture: ComponentFixture<ShoppingCartitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingCartitemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingCartitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
