import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  pid:number;
  product:Product=new Product();

  constructor(private route:ActivatedRoute,private router:Router,private productservice:ProductserviceService) { }

  ngOnInit(): void {

  }
  updateProduct(){
    this.pid=this.route.snapshot.params['id'];
    this.product.id=this.pid;
    this.productservice.updateProduct(this.pid,this.product).subscribe(
      selectedProduct=>{
        console.log(selectedProduct);
        this.product=selectedProduct;
        this.goToProductsList();
      },
      error=>console.log(error)
    );
  }
  goToProductsList() {
    this.router.navigate(['products']);
  }
  onSubmit(){
    this.updateProduct();
  }

}
