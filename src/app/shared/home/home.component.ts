import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemsComponent } from '../../pages/items/items.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ItemsComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
