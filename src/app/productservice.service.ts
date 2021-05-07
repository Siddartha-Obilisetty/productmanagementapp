import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  baseURL="http://localhost:8083/api/v1/"

  constructor(private httpclient:HttpClient) {}

  getProducts() : Observable<Product[]>{
    console.log("view all emloyees url is calling");
    return this.httpclient.get<Product[]>(this.baseURL+'viewall');
  }
  
  addProduct(product:Product) : Observable<any>{
    console.log("add product method is calling here");
    return this.httpclient.post<Product>(this.baseURL+'add',product);
  }
  
  getProduct(pid:number) : Observable<any>{
    console.log("get product method");
    return this.httpclient.get(this.baseURL+'view/'+pid);
  }

  deleteProduct(pid:number):Observable<any>{
    return this.httpclient.delete(this.baseURL+'del/'+pid);
  }

  updateProduct(product:Product):Observable<any>{
    return this.httpclient.put(this.baseURL+'update',product);
  }
}
