import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private users: User[] = [];
  private currentUser: User | null = null;

  constructor(
    private readonly http: HttpClient,
    private router: Router,
  ) {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<User[]>('http://localhost:3000/users').subscribe(users => {
      this.users = users;
    });
  }

  login(email: string) {
    const user = this.users.find(user => user.email === email);
    this.isAuthenticated = Boolean(user);
    if(user) {
      this.currentUser = user;
      this.router.navigate(['/dashboard/home']);
      return null;
    } else {
      return 'User not found. Please sign up.';
    }
  }

  signup(user: User) {
    this.http.post('http://localhost:3000/users', user).subscribe(() => {
      this.users.push(user);
      this.isAuthenticated = true;
      this.router.navigate(['/dashboard/home']);
    });
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['/']);
  }

  getAuthenticationStatus() {
    return this.isAuthenticated;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
