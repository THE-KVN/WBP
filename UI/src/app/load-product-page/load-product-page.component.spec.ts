import { ComponentFixture, TestBed } from '@angular/core/testing';

import { loadProductPageComponent } from './load-product-page.component';

describe('loadProductPageComponent', () => {
  let component: loadProductPageComponent;
  let fixture: ComponentFixture<loadProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ loadProductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(loadProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
