import { Component } from '@angular/core';
import { GreengrocerService } from '../services/greengrocer.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(public readonly grocerService: GreengrocerService) {}
  cartItems: Item[] = this.grocerService.itemList;
  AddItem(item: Item) {
    this.grocerService.total += item.price;
    this.grocerService.total = Math.round(this.grocerService.total * 100) / 100;
    item.quantity += 1;
    console.log(item.quantity);
  }
  SubItem(item: Item) {
    if (item.quantity === 1) {
      this.grocerService.removeItemFromCart(item);
      return;
    }
    this.grocerService.total -= item.price;
    this.grocerService.total = Math.round(this.grocerService.total * 100) / 100;
    item.quantity -= 1;
  }
}
