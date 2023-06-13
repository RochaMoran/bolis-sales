import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportExpensesPage } from './report-expenses.page';

const routes: Routes = [
  {
    path: '',
    component: ReportExpensesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportExpensesPageRoutingModule {}
