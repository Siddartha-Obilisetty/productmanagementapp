import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[];
  product:Product;
  constructor(private prodService:ProductserviceService,private router:Router) { }

  ngOnInit(): void {
    this.reloadProductData();
  }
  reloadProductData(){
    this.prodService.getProducts().subscribe(
      products=>{
        this.products=products
      }
    );
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
  }

}
