import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportExpensesPage } from './report-expenses.page';

describe('ReportExpensesPage', () => {
  let component: ReportExpensesPage;
  let fixture: ComponentFixture<ReportExpensesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReportExpensesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
