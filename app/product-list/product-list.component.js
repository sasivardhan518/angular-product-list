"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_list_service_1 = require("./product-list-service");
var ProductListComponent = (function () {
    function ProductListComponent(productListService) {
        this.productsList = productListService.getProducts();
    }
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'app-product-list',
        providers: [product_list_service_1.ProductListService],
        templateUrl: 'app/product-list/product-list.component.html',
        styleUrls: ['app/product-list/product-list.component.css']
    }),
    __metadata("design:paramtypes", [product_list_service_1.ProductListService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map