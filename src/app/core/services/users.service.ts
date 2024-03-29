import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[] = [];
  private usersSubject = new BehaviorSubject<User[]>([]);
  private selectedUserSubject = new BehaviorSubject<User | null>(null);

  users$: Observable<User[]> = this.usersSubject.asObservable();
  selectedUser$: Observable<User | null> = this.selectedUserSubject.asObservable();

  constructor(
    private readonly http: HttpClient,
  ) {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<User[]>('http://localhost:3000/users').subscribe(users => {
      this.usersSubject.next(users);
    });
  }

  setSelectedUser(user: User) {
    this.selectedUserSubject.next(user);
  }

  getCurrentUsers(): User[]  {
    return this.users;
  }

  getSelectedUserById(id: string): User {
    return this.users.find(user => user.id === id) as User;
  }


}
