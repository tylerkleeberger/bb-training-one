import { Component, OnInit } from '@angular/core';
import { User } from '../../core/models/users.model';
import { AuthService } from '../../core/services/auth.service';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  currentUser: User | null = null;
  showProfile = false;

  constructor(private readonly authService: AuthService) {}

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }

  toggleProfileMenu() {
    this.showProfile = !this.showProfile;
  }

  logout() {
    this.authService.logout();
  }
}
