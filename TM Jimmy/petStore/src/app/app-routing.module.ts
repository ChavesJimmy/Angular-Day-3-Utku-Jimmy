import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { ItemDescriptionComponent } from './item-description/item-description.component';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
  {
    path:"", component: ItemListComponent
  },
  {
    path:"products/:productIndex",component:ItemDescriptionComponent
  },
  {
    path:"cart", component:CartComponent
  },
  {
    path:"contact", component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
