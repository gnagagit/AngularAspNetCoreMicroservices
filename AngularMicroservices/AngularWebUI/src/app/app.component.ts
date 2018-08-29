import { Component } from '@angular/core';
import { AppService } from './app.service';
import { debug } from 'util';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'AngularWebUI';
  showCustomers: boolean = false;
  showProducts: boolean = false;
  customers: any = [];
  products: any = [];
  CustomersData: string = 'This is Customers Click';
  ProductsData: string = 'This is Products Click';
  APIGatewayCustomersData: string = 'This API Gateway Customers Data Click';
  APIGatewayProductsData: string = 'This API Gateway Products Data Click';

  constructor(private appService: AppService) {
    this.customers = [
      { customername: 'XYZ' },
    ];
  }

  getcustomers(): void {
    this.customers = [
      { customername: 'ABC' },
    ];
  }
   
  onCustomersClick(): void {
    this.showCustomers = true;
    this.showProducts = false;
    this.customers = [];
    this.products = [];
    this.appService.GetCustomersData().subscribe(
      (data) => {
        this.customers = data;
          console.log(data);
    });
    //alert(this.CustomersData);
  }


  onProductsClick(): void {
    this.showProducts = true;
    this.showCustomers = false;
    this.customers = [];
    this.products = [];
    this.appService.GetProductsData().subscribe(
      (data) => {
        this.products = data;
          console.log(data);
    });
   // alert(this.ProductsData);
  }


  onAPIGatewayCustomersClick(): void {
    this.showCustomers = true;
    this.showProducts = false;
    this.customers = [];
    this.products = [];
    this.appService.GetCustomersDataFromAPIGateway().subscribe(
      (data) => {
        this.customers = data;
        console.log(data);
      });
    //alert(this.APIGatewayCustomersData);
  }

  onAPIGatewayProductsClick(): void {

    this.showProducts = true;
    this.showCustomers = false;
    this.customers = [];
    this.products = [];
    this.appService.GetProductsDataFromAPIGateway().subscribe(
      (data) => {
        this.products = data;
        console.log(data);
      });
    //alert(this.APIGatewayProductsData);
  }
  
}

