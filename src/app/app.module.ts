import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';
import { ProductPageComponent } from './ProductPage/product-page/product-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartComponent } from './Cart/cart/cart.component';
import { WishlistComponent } from './Wishlist/wishlist/wishlist.component';
import { HomeComponent } from './home/home/home.component';
import { StoreRoutingModule } from './store-route.module';
import { orderComponent } from './order/order.component';
import { Toggler } from './Toggler/Toggler.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductPageComponent,
    CartComponent,
    WishlistComponent,
    HomeComponent,
    orderComponent,
    Toggler

  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    StoreRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
