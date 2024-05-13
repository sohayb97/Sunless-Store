import { Output } from '@angular/core';
import { Product } from "./Product.model"

export class prods {
 static products:Product[]=[
    new Product ('Falent Vintage Sunglasses 1 ','Polygon Polarised Sunglasses Women Men Metal UV400 Protection',60,'/assets/img/glasses1.jpg',true,30),
    new Product('Falent Vintage Sunglasses 2 ','Polygon Polarised Sunglasses Women Men Metal UV500 Protection',55,'/assets/img/glasses2.jpg',false,0),
    new Product('Falent Vintage Sunglasses 3 ','Polygon Polarised Sunglasses Women Men Metal UV600 Protection',80,'/assets/img/glasses3.jpg',true,50),
    new Product('Falent Vintage Sunglasses 4 ','Polygon Polarised Sunglasses Women Men Metal UV600 Protection',80,'/assets/img/glasses2.jpg',true,50),
 ]

}
