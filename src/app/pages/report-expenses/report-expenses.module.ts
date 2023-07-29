import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportExpensesPageRoutingModule } from './report-expenses-routing.module';

import { ReportExpensesPage } from './report-expenses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportExpensesPageRoutingModule
  ],
  declarations: [ReportExpensesPage]
})
export class ReportExpensesPageModule {}
