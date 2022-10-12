import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { myPetItems } from '../petShopItems/petShopItems';
import { IpetItems } from '../petShopItems/interfacePetShopItems';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.css']
})
export class ItemDescriptionComponent implements OnInit {
  items : IpetItems = {} as IpetItems;
  index: number = 0;
  constructor(private chemin: ActivatedRoute,
      private otherway: CartService) { }

addToCart(){
  alert("you added this product to the cart");
  this.otherway.addToCart(this.items);

}
  ngOnInit(): void {

    this.chemin.params.subscribe((params: Params)=>{
      this.index = +params["productIndex"];
      this.items = myPetItems[this.index]
    }) 
    }
}
