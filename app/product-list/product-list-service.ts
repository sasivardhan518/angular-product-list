import {Injectable} from '@angular/core';

import {PRODUCTS} from './product-list';

@Injectable()
export class ProductListService{
    getProducts(){
            return PRODUCTS;
    }
}

