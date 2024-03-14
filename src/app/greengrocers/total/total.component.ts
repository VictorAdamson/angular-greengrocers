import { Component, Input } from '@angular/core';
import { GreengrocerService } from '../services/greengrocer.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css'],
})
export class TotalComponent {
  constructor(public readonly grocerService: GreengrocerService) {}
}
