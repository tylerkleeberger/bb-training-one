import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { User } from '../../core/models/users.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  @Input() user: User | null = null;
}
