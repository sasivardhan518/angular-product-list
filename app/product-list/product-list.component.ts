import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import {ProductListService} from './product-list-service'

@Component({
  selector: 'app-product-list',
   providers: [ProductListService],
  templateUrl: 'app/product-list/product-list.component.html',
  styleUrls: ['app/product-list/product-list.component.css']
})
export class ProductListComponent {
productsList : Product[] ;

 constructor(productListService: ProductListService) {
    this.productsList = productListService.getProducts();
  }
}
