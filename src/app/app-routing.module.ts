import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'',redirectTo: 'product',pathMatch:'full'},
  {path:'products',component:ProductListComponent},
  {path:'add',component:CreateProductComponent},
  {path:'update/:id',component:UpdateProductComponent},
  {path:'details',component:ProductDetailsComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
