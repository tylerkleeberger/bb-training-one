import { TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../../../core/models/items.model';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [TitleCasePipe, FormsModule],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css',
})
export class ItemDetailComponent {
  currentItem: Item = { id: '', name: '', description: '' , quantity: 0 };
  originalTitle? = '';
  @Input() set item(value: Item | undefined) {
    if (!value) return;
    this.currentItem = { ...value };
    this.originalTitle = this.currentItem?.name;
  }

  @Output() saveItem = new EventEmitter();
  @Output() cancel = new EventEmitter();


  clearForm(): void {
    this.currentItem = { id: '', name: '', description: '' , quantity: 0 };
    this.cancel.emit()
  }

  saveForm(): void {
    this.saveItem.emit(this.currentItem);
    this.clearForm();
  }
}
