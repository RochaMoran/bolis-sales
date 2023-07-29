import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private httpClient: HttpClient) { }

  getCustomers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
