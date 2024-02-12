import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addContractPageComponent } from './add-contract-page.component';

describe('loadProductPageComponent', () => {
  let component: addContractPageComponent;
  let fixture: ComponentFixture<addContractPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ addContractPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(addContractPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});