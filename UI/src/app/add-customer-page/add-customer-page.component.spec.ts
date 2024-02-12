import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addCustomerPageComponent } from './add-customer-page.component';

describe('loadProductPageComponent', () => {
  let component: addCustomerPageComponent;
  let fixture: ComponentFixture<addCustomerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ addCustomerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(addCustomerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});