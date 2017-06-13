import { Injectable }              from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Product } from "./product";

@Injectable()
export class ProductListServiceServer {
  private productsUrl = 'http://192.168.8.195/mm2013/products/GetProducts';  // URL to web API
 
  constructor (private http: Http) {}
 
  getProducts(): Observable<Product[]> {
    
    return this.http.get(this.productsUrl)
                    .map(this.extractData)
                    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
 
}