import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private networkStatusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public networkStatus$ = this.networkStatusSubject.asObservable();

  constructor() {
    this.initNetworkListeners();
  }

  async initNetworkListeners() {
    const status = await Network.getStatus();
    this.networkStatusSubject.next(status.connected);

    Network.addListener('networkStatusChange', (status) => {
      this.networkStatusSubject.next(status.connected);
    });
  }

  getNetworkStatus(): Observable<boolean> {
    return this.networkStatus$;
  }
}
