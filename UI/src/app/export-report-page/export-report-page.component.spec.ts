import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportReportPageComponent } from './export-report-page.component';

describe('ExportReportPageComponent', () => {
  let component: ExportReportPageComponent;
  let fixture: ComponentFixture<ExportReportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportReportPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
