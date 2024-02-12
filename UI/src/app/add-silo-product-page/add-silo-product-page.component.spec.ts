import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addSiloProductPageComponent } from './add-silo-product-page.component';

describe('loadProductPageComponent', () => {
  let component: addSiloProductPageComponent;
  let fixture: ComponentFixture<addSiloProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ addSiloProductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(addSiloProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});