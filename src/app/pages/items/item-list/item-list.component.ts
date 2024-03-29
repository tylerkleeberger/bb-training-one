import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../../core/models/items.model';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [NgClass],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css',
})
export class ItemListComponent {
  @Input() items: Item[] = [];
  @Input() selectedItem?: Item;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  removeItem(itemId: string, event: Event) {
    event.stopPropagation();
    if (window.confirm("Are you sure you want to delete this item?")) {
      this.deleted.emit(itemId);
    }
  }

}
