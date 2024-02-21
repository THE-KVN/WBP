import { ComponentFixture, TestBed } from '@angular/core/testing';

import { waybilPrintPageComponent } from './waybil-print-page.component';

describe('waybilPrintPageComponent', () => {
  let component: waybilPrintPageComponent;
  let fixture: ComponentFixture<waybilPrintPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ waybilPrintPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(waybilPrintPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
