import { ComponentFixture, TestBed } from '@angular/core/testing';

import { offLoadProductPageComponent } from './off-load-product-page.component';

describe('offLoadProductPageComponent', () => {
  let component: offLoadProductPageComponent;
  let fixture: ComponentFixture<offLoadProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ offLoadProductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(offLoadProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
