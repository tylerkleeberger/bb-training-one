import { AsyncPipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../core/models/users.model';
import { UsersService } from '../../core/services/users.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UsersListComponent, UserDetailsComponent, AsyncPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users$ = this.usersService.users$;
  selectedUser!: User;

  constructor(private usersService: UsersService, private location: Location) {}

  ngOnInit() {
    this.usersService.selectedUser$.subscribe(user => {
      this.selectedUser = user as User;
    });
  }

  userSelected(user: User) {
    this.usersService.setSelectedUser(user);
    this.location.go(`/dashboard/users/${user.id}`);

  }
}
