import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { ProductListComponent } from './product-list/product-list.component'
import { ProductListComponentServer } from "./product-list/product-list-from-server-component";

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, ProductListComponent, ProductListComponentServer],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
