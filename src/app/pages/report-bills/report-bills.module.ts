import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportBillsPageRoutingModule } from './report-bills-routing.module';

import { ReportBillsPage } from './report-bills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportBillsPageRoutingModule
  ],
  declarations: [ReportBillsPage]
})
export class ReportBillsPageModule {}
