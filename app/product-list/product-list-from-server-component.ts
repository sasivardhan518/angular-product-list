import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import {ProductListServiceServer} from './product-list-service-server'

@Component({
  selector: 'app-product-list-server',
  providers: [ProductListServiceServer],
  templateUrl: 'app/product-list/product-list-from-server-component.html',
  styleUrls: ['app/product-list/product-list.component.css']
})
export class ProductListComponentServer {
productsList : Product[] ;

 constructor(private productListServiceServer: ProductListServiceServer) { }
 
  ngOnInit() { this.getProducts(); }
 
  getProducts() {
    this.productListServiceServer.getProducts()
                     .subscribe(
                       products => this.productsList = products
                    );
  } 
}
