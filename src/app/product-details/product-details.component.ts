import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  prodid:number;
  product:Product;

  constructor(private route:ActivatedRoute,private router:Router,private prodService:ProductserviceService) { }

  ngOnInit(): void {
    this.product=new Product();
    this.prodid=this.route.snapshot.params['id'];
    console.log(this.route.snapshot);
    this.prodService.getProduct(this.prodid).subscribe(
      selectedProduct=>{
        console.log(selectedProduct);
        this.product=selectedProduct;
      },
      error=>console.log(error)
      );
  }

  goToProductList(){
    this.router.navigate(['products']);
  }
}
