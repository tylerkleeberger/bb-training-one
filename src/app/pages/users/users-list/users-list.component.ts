import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../../core/models/users.model';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent {
  @Input() users!: User[];
  @Output() selectedUser = new EventEmitter<User>();

  selectUser(user: User) {
    this.selectedUser.emit(user);
  }
}
