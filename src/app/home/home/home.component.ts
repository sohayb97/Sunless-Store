import { Product } from './../../../models/Product.model';

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartComponent } from 'src/app/Cart/cart/cart.component';
import { cart } from 'src/models/Cart.model';
import { prods } from 'src/models/Prods';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

      @Output() ChosenProd = new EventEmitter();

      constructor(){
      }

      onProudSelect(prod:Product){
       this.ChosenProd.emit(prod);
       cart.busket.push(prod)
      }

 @Input() products= prods.products

}

