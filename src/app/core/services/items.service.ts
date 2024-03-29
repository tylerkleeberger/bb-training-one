import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/items.model';

const APP_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private  readonly  http: HttpClient) { }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.getUrl());
  }

  getItem(id: string) {
    return this.http.get(this.getUrlWithID(id));
  }

  createItem(item: Item) {
    return this.http.post(this.getUrl(), item);
  }

  editItem(item: Item) {
    return this.http.put(this.getUrlWithID(item.id), item);
  }

  deleteItem(id: string) {
    return this.http.delete(this.getUrlWithID(id));
  }

  getUrl() {
    return `${APP_URL}/items`;
  }

  getUrlWithID(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
