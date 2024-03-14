import { Component, ElementRef, ViewChild } from '@angular/core';
import { GreengrocerService } from '../services/greengrocer.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  constructor(public readonly grocerService: GreengrocerService) {}
  items: Promise<Item[]> = this.grocerService.items;
  fruits: Promise<Item[]> = this.grocerService.fruits;
  vegetables: Promise<Item[]> = this.grocerService.vegetables;

  @ViewChild('filter') filter!: ElementRef;
  selectedFilter = 'All';
  onSelected(): void {
    this.selectedFilter = this.filter.nativeElement.value;
  }

  addToCart(item: Item) {
    // Description: sends the item of the pushed button to the service to be added to itemList
    // Input: item: Item
    console.log('You pressed the button for: ', item);
    this.grocerService.addItemToCart(item);
  }
}
