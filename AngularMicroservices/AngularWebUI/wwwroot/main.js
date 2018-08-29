(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\ntd,th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n\r\ntr:nth-child(even) {\r\n    background-color: #f2f2f2;\r\n  }\r\n\r\ntr:hover {\r\n    background-color: #ddd;\r\n  }\r\n\r\nth {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1><strong>Angular with AspNet Core Microservices and API Gateway</strong></h1>\r\n</div>\r\n<br /><br />  <br /><br /> \r\n<div>\r\n  <button (click)='onCustomersClick()'><strong>View Customers Microservices</strong> </button>\r\n  <br /><br />\r\n  <button (click)='onProductsClick()'><strong>View Products Microservices</strong></button>\r\n  <br /><br />\r\n  <button (click)='onAPIGatewayCustomersClick()'><strong>View APIGateway Customers Microservices</strong></button>\r\n  <br /><br />\r\n  <button (click)='onAPIGatewayProductsClick()'><strong>View APIGateway Products Microservices</strong></button>\r\n</div>\r\n<br /><br /> <br /><br />\r\n\r\n<!--<div>\r\n  <button (click)='getcustomers()'><strong>Customer Name</strong> </button>\r\n  <br /><br />\r\n</div>\r\n<div *ngFor='let customer of customers'>\r\n  <p>{{customer.customername}}</p>\r\n</div>\r\n<p *ngIf=\"!customers || customers.length==0\">NO JSON Data</p>-->\r\n\r\n\r\n<div *ngIf=\"showCustomers\">\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <td>ID</td>\r\n        <td>Name</td>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor='let customer of customers'>\r\n        <td>{{customer.id}}</td>\r\n        <td>{{customer.name}}</td>\r\n      </tr>\r\n      <tr *ngIf=\"!customers || customers.length==0\">\r\n        <td colspan=\"2\">NO JSON Data</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<div *ngIf=\"showProducts\">\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <td>ID</td>\r\n        <td>Description</td>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor='let product of products'>\r\n        <td>{{product.id}}</td>\r\n        <td>{{product.description}}</td>\r\n      </tr>\r\n      <tr *ngIf=\"!products || products.length==0\">\r\n        <td colspan=\"2\">NO JSON Data</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [
                _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
                _app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//const httpOptions = {
//  headers: new HttpHeaders({
//    'Content-Type': 'application/json',
//    'Access-Control-Allow-Origin':'*'
//  })
//};
var AppService = /** @class */ (function () {
    function AppService(httpClient, appSettings) {
        this.httpClient = httpClient;
        this.appSettings = appSettings;
    }
    AppService.prototype.GetCustomersData = function () {
        return this.httpClient.get(this.appSettings.API_CustomersURL + '/customers');
    };
    AppService.prototype.GetProductsData = function () {
        return this.httpClient.get(this.appSettings.API_ProductsURL + '/products');
    };
    AppService.prototype.GetCustomersDataFromAPIGateway = function () {
        return this.httpClient.get(this.appSettings.API_ApiGatewayURL + '/customers');
    };
    AppService.prototype.GetProductsDataFromAPIGateway = function () {
        return this.httpClient.get(this.appSettings.API_ApiGatewayURL + '/products');
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/app.settings.ts":
/*!*********************************!*\
  !*** ./src/app/app.settings.ts ***!
  \*********************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
        this.API_CustomersURL = "https://localhost:44300/api";
        this.API_ProductsURL = "https://localhost:44302/api";
        this.API_ApiGatewayURL = "https://localhost:44304/api";
    }
    return AppSettings;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AngularMicroservices9\AngularMicroservices\AngularWebUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map