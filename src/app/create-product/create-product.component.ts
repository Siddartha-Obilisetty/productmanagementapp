import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product:Product = new Product();
  submitted = false;
  constructor(private router:Router,private prodService:ProductserviceService) { }

  ngOnInit(): void {
  }
  createProduct(){
    this.prodService.addProduct(this.product).subscribe(
      result=>{
        console.log(result);
        this.product=new Product();
        this.goToProductsList();
      },
      error=>console.log(error)
    );
  }
  goToProductsList() {
    this.router.navigate(['products']);
  }
  onSubmit(){
    this.submitted=true;
    this.createProduct();
  }

}
