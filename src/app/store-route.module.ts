import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './Cart/cart/cart.component';
import { HomeComponent } from './home/home/home.component';
import { NgModule } from '@angular/core';
import { ProductPageComponent } from './ProductPage/product-page/product-page.component';
import { orderComponent } from './order/order.component';

const routes: Routes = [
  {path:'',component:HomeComponent, pathMatch:'full'},
  {path:'cart',component:CartComponent},
  {path:'products',component:ProductPageComponent},
  {path:'order',component:orderComponent},
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class StoreRoutingModule{

}
