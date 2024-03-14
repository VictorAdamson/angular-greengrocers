import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { TotalComponent } from './total/total.component';

@NgModule({
  declarations: [StoreComponent, CartComponent, TotalComponent],
  imports: [CommonModule],
  exports: [StoreComponent, CartComponent, TotalComponent],
})
export class GreengrocersModule {}
