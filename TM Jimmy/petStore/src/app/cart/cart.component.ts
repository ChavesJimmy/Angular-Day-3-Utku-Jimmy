import { Component, OnInit } from '@angular/core';
import { IpetItems } from '../petShopItems/interfacePetShopItems';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Array<IpetItems> =[];  
  constructor(private cartservice: CartService) { }
getTotal(){
  this.cartservice.gettotal()
}

  ngOnInit(): void {
    this.items = this.cartservice.getItems()
  }

  /* get totalprice(){
    return this.items.reduce(
      (sum, product) => ({
        item : 1,
        price : sum.price + product.price}),
        {item:1, price:0}
    ).price
  } */
}
