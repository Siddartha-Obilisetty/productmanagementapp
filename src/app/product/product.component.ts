import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[];
  product:Product;
  //injecting the service
  constructor(private prodService:ProductserviceService) { }

  ngOnInit(): void {
  }


  getProducts(){
    this.prodService.getProducts().subscribe(
      products=>{
        this.products = products;
      }
    );
    console.log(this.products);
  }

  deleteProduct(pid:number){
    this.prodService.deleteProduct(pid).subscribe(
      data=>{
        alert("product deleted succesfully");
      }
    );

  }

  updateProduct(product:Product){
    this.prodService.updateProduct(product).subscribe(
      data=>{
        alert("product updated succesfully");
      }
    );

  }

  getProduct(pid:number){
    this.prodService.getProduct(pid).subscribe(
      product=>{
        this.product=product;
      }
    );
    console.log(this.product);
  }

  addProduct(product:Product){
    this.prodService.addProduct(product).subscribe(
      data=>{
        alert('product added succesfully');
      }
    );
  }
}
