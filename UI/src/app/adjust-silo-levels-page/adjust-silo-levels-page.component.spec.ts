import { ComponentFixture, TestBed } from '@angular/core/testing';

import { adjustSiloLevelsPageComponent } from './adjust-silo-levels-page.component';

describe('loadProductPageComponent', () => {
  let component: adjustSiloLevelsPageComponent;
  let fixture: ComponentFixture<adjustSiloLevelsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ adjustSiloLevelsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(adjustSiloLevelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});