import { Component, OnInit } from '@angular/core';
import { myPetItems } from '../petShopItems/petShopItems';
import { IpetItems } from '../petShopItems/interfacePetShopItems';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
myPetItems:Array<IpetItems> = myPetItems;
  constructor() { }

  ngOnInit(): void {
  }

}
