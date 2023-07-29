import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss'],
})
export class DashboardItemComponent  implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  navigate(route: string){
    this.navCtrl.navigateRoot([route]);

  }

}
