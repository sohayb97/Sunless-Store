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
  products= prods.products

  // currentPage = 1;
  // itemsPerPage = 5;
  // totalProducts = this.products.length;

  constructor(){
  }

  onProudSelect(prod:Product){
   this.ChosenProd.emit(prod);
   cart.busket.push(prod)
  }


  // changePage(page: number): void {
  //   this.currentPage = page;
  // }

  // get paginatedProducts() {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   return this.products.slice(startIndex, startIndex + this.itemsPerPage);
  // }

  // get numberOfPages(): number {
  //   return Math.ceil(this.totalProducts / this.itemsPerPage);
  // }

}
