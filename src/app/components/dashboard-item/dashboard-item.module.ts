import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashboardItemComponent } from './dashboard-item.component';

@NgModule({
  declarations: [DashboardItemComponent],
  imports: [CommonModule, IonicModule],
  exports: [DashboardItemComponent], // Exporta el componente si deseas usarlo en otros módulos
})
export class DashboardItemModule {}