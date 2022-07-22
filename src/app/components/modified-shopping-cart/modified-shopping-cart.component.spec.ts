import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiedShoppingCartComponent } from './modified-shopping-cart.component';

describe('ModifiedShoppingCartComponent', () => {
  let component: ModifiedShoppingCartComponent;
  let fixture: ComponentFixture<ModifiedShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiedShoppingCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifiedShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
