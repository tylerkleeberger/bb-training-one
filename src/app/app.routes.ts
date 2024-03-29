import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/authGuard';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ItemsComponent } from './pages/items/items.component';
import { LandingComponent } from './pages/landing/landing.component';
import { UserDetailsComponent } from './pages/users/user-details/user-details.component';
import { UsersComponent } from './pages/users/users.component';
import { HomeComponent } from './shared/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'auth', component: AuthComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'items', component: ItemsComponent, canActivate: [AuthGuard] },
      { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
      { path: 'users/:id', component: UserDetailsComponent },
    ],
  },

  { path: '**', redirectTo: 'landing' },
];
