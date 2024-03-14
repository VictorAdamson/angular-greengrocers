import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GreengrocerService {
  itemList: Item[] = [];
  total: number = 0;
  constructor(private readonly http: HttpClient) {}

  get items(): Promise<Item[]> {
    return firstValueFrom(
      this.http.get<Item[]>(`https://boolean-api-server.fly.dev/groceries`)
    );
  }

  async addItemToCart(item: Item) {
    // Description: Add the recieved item to itemList
    // Input: item: Item
    // Check if item already exists in itemList
    if (!this.itemList.includes(item)) {
      // If it does not: add item to itemList
      this.itemList.push(item);
      this.total += item.price;
      item.quantity = 1;
      // Round total to avoid calculation errors
      this.total = Math.round(this.total * 100) / 100;
    } else {
      // If it does: iterate count instead of adding it
      item.quantity += 1;
      this.total += item.price;
      this.total = Math.round(this.total * 100) / 100;
    }
    console.log('Current cart: ', this.itemList);
  }
  async removeItemFromCart(item: Item) {
    const index = this.itemList.indexOf(item);
    this.itemList.splice(index, 1);
    this.total -= item.price;
    this.total = Math.round(this.total * 100) / 100;
  }
}
