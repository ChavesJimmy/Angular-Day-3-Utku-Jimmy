import { Injectable } from '@angular/core';
import { IpetItems } from './petShopItems/interfacePetShopItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Array<IpetItems> =[];

  constructor() { }

  addToCart(product: IpetItems) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }
  
  clearCart() {
    this.items = [];
    return this.items;
  }

gettotal(){
  let total : number = 0;
  for(let item of this.items){
    total+= item.price
  } return total
}
}