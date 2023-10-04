import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  // {path:" ", redirectTo:'product',pathMatch:'full'},
  {path:"product",component:ProductsComponent},
  {path:"cart",component:CartComponent},
  {path:"",component:ProductsComponent},
  {path:"add",component:AddProductComponent},
  {path:"pay",component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
