import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../core/models/users.model';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent implements OnInit {
  mode = 'login';
  errorMessage: string | null = null;
  authForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/[a-zA-Z]*$/)]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/[a-zA-Z]*$/)]],
    email: ['', [Validators.required, Validators.email]],
    dateOfBirth: ['', [Validators.required, this.dateOfBirthValidator]],
  });

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
  ) {}

  ngOnInit() {}

  switchMode() {
    this.mode = this.mode === 'login' ? 'signup' : 'login';
  }

  submitLoginForm() {
    this.errorMessage = this.authService.login(this.authForm.value.email);
    if (this.authForm.valid) {
      const user: User = {
        id: this.mode === 'login' ? '' : this.generateId(),
        firstName: this.authForm.value.firstName,
        lastName: this.authForm.value.lastName,
        email: this.authForm.value.email,
        dateOfBirth: this.authForm.value.dateOfBirth,
      };
      if (this.mode === 'login') {
        this.authService.login(user.email);
      } else {
        this.authService.signup(user);
      }
      this.router.navigate(['/dashboard']);
    }
  }

  generateId(): string {
    return Math.random().toString(36).substring(2, 11);
  }

  dateOfBirthValidator(control: AbstractControl):ValidationErrors | null {
    const dateOfBirth = new Date(control.value);
    const ageDifMs = Date.now() - dateOfBirth.getTime();
    const ageDate = new Date(ageDifMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return age < 18 ? { underage: true } : null;
  }
}
