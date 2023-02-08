import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { NavbarComponent } from './components/firstpage-part/navbar/navbar.component';
import { LandingPageComponent } from './components/firstpage-part/landing-page/landing-page.component';
import { CategoryTitleComponent } from './components/firstpage-part/category-title/category-title.component';
import { SecondPageComponent } from './components/secondpage/second-page/second-page.component';
import { ProductSuggestionTemplateComponent } from './components/shared/product-suggestion-template/product-suggestion-template.component';
import { ThridPageComponent } from './components/thrid-page/thrid-page.component';
import { FourthPageComponent } from './components/fourth-page/fourth-page.component';
import { FeedbackCardComponent } from './components/shared/feedback-card/feedback-card.component';
import { FifthPageComponent } from './components/fifth-page/fifth-page.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemTemplateComponent } from './components/shared/cart-item-template/cart-item-template.component';
import { OrderSummaryTemplateComponent } from './components/shared/order-summary-template/order-summary-template.component';
import { AdressTemplateComponent } from './components/shared/adress-template/adress-template.component';
import { AddressPageComponent } from './components/address-page/address-page.component';
import { ShippingPageComponent } from './components/shipping-page/shipping-page.component';
import { PlansPageComponent } from './components/shared/plans-page/plans-page.component';
import { PlanTemplateComponent } from './components/shared/plan-template/plan-template.component';
import { ProductAddComponent } from './components/admin/product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    NavbarComponent,
    LandingPageComponent,
    CategoryTitleComponent,
    SecondPageComponent,
    ProductSuggestionTemplateComponent,
    ThridPageComponent,
    FourthPageComponent,
    FeedbackCardComponent,
    FifthPageComponent,
    ProductDetailComponent,
    CartComponent,
    CartItemTemplateComponent,
    OrderSummaryTemplateComponent,
    AdressTemplateComponent,
    AddressPageComponent,
    ShippingPageComponent,
    PlansPageComponent,
    PlanTemplateComponent,
    ProductAddComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
