import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, AuthComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  checkAuth() {
    this.authService.getAuthenticationStatus() ? this.router.navigate(['/dashboard/home']) : this.router.navigate(['/auth']);
  }
}
