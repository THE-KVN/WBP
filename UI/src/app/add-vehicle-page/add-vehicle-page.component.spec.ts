import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addVehiclePageComponent } from './add-vehicle-page.component';

describe('addVehiclePageComponent', () => {
  let component: addVehiclePageComponent;
  let fixture: ComponentFixture<addVehiclePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ addVehiclePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(addVehiclePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
