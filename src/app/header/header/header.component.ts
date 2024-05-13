import { prods } from 'src/models/Prods';
import { Product } from 'src/models/Product.model';
import { cart } from 'src/models/Cart.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  CartCounter:number = 0

  ngOnInit() {
    this.updateCartCounter();
    setInterval(() => {
      this.updateCartCounter();
    }, 1000);
  }
  
  updateCartCounter() {
    this.CartCounter = cart.busket.length;
  }
}
