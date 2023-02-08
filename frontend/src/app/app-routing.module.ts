import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressPageComponent } from './components/address-page/address-page.component';
import { ProductAddComponent } from './components/admin/product-add/product-add.component';
import { CartComponent } from './components/cart/cart.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { PlansPageComponent } from './components/shared/plans-page/plans-page.component';
import { ShippingPageComponent } from './components/shipping-page/shipping-page.component';

const routes: Routes = [
  {path:'', pathMatch:"full" ,redirectTo:'Home'},
  {path:'Home',component:FirstpageComponent},
  {path:'product-detail',component:ProductDetailComponent},
  {path:'cart',component:CartComponent},
  {path:'address',component:AddressPageComponent},
  {path:'shipping',component:ShippingPageComponent},
  {path:'pricing', component:PlansPageComponent},
  {path:'add-product',component:ProductAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
