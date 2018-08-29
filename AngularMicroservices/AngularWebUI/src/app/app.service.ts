import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from './app.settings';

//const httpOptions = {
//  headers: new HttpHeaders({
//    'Content-Type': 'application/json',
//    'Access-Control-Allow-Origin':'*'
//  })
//};

@Injectable()
export class AppService {

  constructor(private httpClient: HttpClient, private appSettings: AppSettings) {

  }


  GetCustomersData(): Observable<any> {
    return this.httpClient.get(this.appSettings.API_CustomersURL + '/customers');
  }

  GetProductsData(): Observable<any> {
    return this.httpClient.get(this.appSettings.API_ProductsURL + '/products');
  }

  GetCustomersDataFromAPIGateway(): Observable<any> {
    return this.httpClient.get(this.appSettings.API_ApiGatewayURL + '/customers');
  }

  GetProductsDataFromAPIGateway(): Observable<any> {
    return this.httpClient.get(this.appSettings.API_ApiGatewayURL + '/products');
  }
    
}
