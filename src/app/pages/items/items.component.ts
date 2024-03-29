import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../core/models/items.model';
import { ItemsService } from '../../core/services/items.service';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [ItemListComponent, ItemDetailComponent, AsyncPipe],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css',
})
export class ItemsComponent implements OnInit {
  items = [];
  items$!: Observable<Item[]>;
  selectedItem?: Item;

  constructor(private readonly itemsService: ItemsService) {}

  ngOnInit(): void {
    this.fetchItemList();
  }

  fetchItemList() {
    this.items$ = this.itemsService.getAllItems();
  }

  selectItem(item: Item) {
    this.selectedItem = item;
  }

  saveItem(item: Item) {
    if (item.id) {
      this.updateItem(item);
    } else {
      this.createItem(item);
    }
  }

  createItem(item: Item) {
    this.itemsService.createItem(item).subscribe((result => this.fetchItemList()))
  }

  updateItem(item: Item) {
    this.itemsService.editItem(item).subscribe((result => this.fetchItemList()))
  }

  deleteItem(itemId: string) {
    this.itemsService.deleteItem(itemId).subscribe((result => this.fetchItemList()))
  }

  resetItemForm(): void {
    this.selectedItem = undefined;
  }

}
