var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AppService } from './app.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(appService) {
        this.appService = appService;
        //title = 'AngularWebUI';
        this.showCustomers = false;
        this.showProducts = false;
        this.customers = [];
        this.products = [];
        this.CustomersData = 'This is Customers Click';
        this.ProductsData = 'This is Products Click';
        this.APIGatewayCustomersData = 'This API Gateway Customers Data Click';
        this.APIGatewayProductsData = 'This API Gateway Products Data Click';
        this.customers = [
            { customername: 'XYZ' },
        ];
    }
    AppComponent.prototype.getcustomers = function () {
        this.customers = [
            { customername: 'ABC' },
        ];
    };
    AppComponent.prototype.onCustomersClick = function () {
        var _this = this;
        this.showCustomers = true;
        this.showProducts = false;
        this.customers = [];
        this.products = [];
        this.appService.GetCustomersData().subscribe(function (data) {
            _this.customers = data;
            console.log(data);
        });
        //alert(this.CustomersData);
    };
    AppComponent.prototype.onProductsClick = function () {
        var _this = this;
        this.showProducts = true;
        this.showCustomers = false;
        this.customers = [];
        this.products = [];
        this.appService.GetProductsData().subscribe(function (data) {
            _this.products = data;
            console.log(data);
        });
        // alert(this.ProductsData);
    };
    AppComponent.prototype.onAPIGatewayCustomersClick = function () {
        var _this = this;
        this.showCustomers = true;
        this.showProducts = false;
        this.customers = [];
        this.products = [];
        this.appService.GetCustomersDataFromAPIGateway().subscribe(function (data) {
            _this.customers = data;
            console.log(data);
        });
        //alert(this.APIGatewayCustomersData);
    };
    AppComponent.prototype.onAPIGatewayProductsClick = function () {
        var _this = this;
        this.showProducts = true;
        this.showCustomers = false;
        this.customers = [];
        this.products = [];
        this.appService.GetProductsDataFromAPIGateway().subscribe(function (data) {
            _this.products = data;
            console.log(data);
        });
        //alert(this.APIGatewayProductsData);
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [AppService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map