import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { LandingComponent } from './pages/landing/landing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingComponent, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
