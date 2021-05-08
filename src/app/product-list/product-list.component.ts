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
      result=>{
      },
      error=>console.log(error));
      alert("Product deleted succesfully");
      this.reloadProductData();
  }

  productDetails(id:number){
    this.router.navigate(['details',id]);

  }

  addProduct(){
    this.router.navigate(['add']);
  }
  /*
  updateProduct(id:number,product:Product){
    this.prodService.updateProduct(id,product).subscribe(
      data=>{
      },
      error=>console.log(error));
    alert("product updated succesfully");
    this.reloadProductData();

  }
  */

}
