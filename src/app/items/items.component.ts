import { Component } from '@angular/core';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [
    ItemListComponent,
    ItemDetailComponent
  ],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  items= [];
  items$: any;

}
