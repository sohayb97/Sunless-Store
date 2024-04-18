import { state } from '@angular/animations';
import { Product } from './../../../models/Product.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cart } from 'src/models/Cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  carrt=cart.busket;

  @Output() RemoveFromCart= new EventEmitter();

  Remove(product:Product){
    this.RemoveFromCart.emit(product);
    let index = cart.busket.indexOf(product)
    cart.busket.splice(index,1);
  }
  EmptyCart(){
    this.carrt.length=0
  }

}


