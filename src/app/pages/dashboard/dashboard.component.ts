import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { HomeComponent } from '../../shared/home/home.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { ItemsComponent } from '../items/items.component';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ItemsComponent, HeaderComponent, UsersComponent, RouterOutlet, SidebarComponent, HomeComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
