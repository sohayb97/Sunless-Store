import { Component } from "@angular/core";
import { cart } from "src/models/Cart.model";

@Component({
  selector: 'app-toggler',
  templateUrl: './Toggler.component.html',
  styleUrls: ['./toggler.component.css']
})
export class Toggler{
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
