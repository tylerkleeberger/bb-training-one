import { Component } from '@angular/core';
import { ItemsComponent } from '../items/items.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ItemsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
