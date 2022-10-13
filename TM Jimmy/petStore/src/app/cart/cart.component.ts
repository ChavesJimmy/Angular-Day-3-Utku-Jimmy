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
  //total = 0
  getTotal(){
    let total=0;
    for(let item of this.items){
     total += item.price ;
    }
    return total
  };

  ngOnInit(): void {
    this.items = this.cartservice.getItems();
    //this.total = this.cartservice.gettotal();
    
  }
}
