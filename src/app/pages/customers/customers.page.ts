import { StorageService } from './../../services/storage.service';
import { NetworkService } from './../../services/network.service';
import { CustomersService } from './../../services/customers.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

HttpClient
@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  customers: any;
  databaseName = 'customers';
  database: any;
  
  constructor(
    private customersService: CustomersService,
    private networkService: NetworkService,
    private storageService: StorageService
  ) {
    
  }

  getData() {
    this.networkService.getNetworkStatus().subscribe((connected) => {
      if (connected) {
        this.customersService.getCustomers().subscribe((customers) => {
          this.customers = customers;
          this.storageService.set(this.databaseName, customers);
        });
      } else {
        this.storageService.get(this.databaseName)?.then((customers:any) => {
          this.customers = customers;
        })
      }
    });
  }

  ngOnInit() {
    this.getData();
  }

  openCustomer(customer: any) {
    console.log(customer);
  }
}
