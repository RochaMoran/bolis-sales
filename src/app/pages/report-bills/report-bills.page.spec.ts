import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportBillsPage } from './report-bills.page';

describe('ReportBillsPage', () => {
  let component: ReportBillsPage;
  let fixture: ComponentFixture<ReportBillsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReportBillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
