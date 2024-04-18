import { prods } from './../../../models/Prods';
import { Component,EventEmitter,Input,Output } from '@angular/core';
import { cart } from 'src/models/Cart.model';
import { Product } from 'src/models/Product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  @Output() ChosenProd = new EventEmitter();

  constructor(){
  }

  onProudSelect(prod:Product){
   this.ChosenProd.emit(prod);
   cart.busket.push(prod)
  }
  
  products= prods.products

}
