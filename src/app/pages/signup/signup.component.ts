import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  passwordMismatch = false;

  constructor(private authService: AuthService, private router: Router) {}

  signupUser(form: NgForm) {
    if (form.valid) {
      if (this.password !== this.confirmPassword) {
        this.passwordMismatch = true;
        return;
      }

      this.passwordMismatch = false;

      const signupData = {
        username: this.name,
        email: this.email,
        password: this.password
      };

      this.authService.signup(signupData).subscribe({
        next: (res: string) => {
          if (res === 'User registered successfully') {
            alert('Signup successful!');
            this.router.navigate(['/login']);
          } else {
            alert(res);
          }
        },
        error: (err) => {
          alert(err?.error || 'Signup failed. Try again.');
          console.error(err);
        }
      });
    } else {
      form.control.markAllAsTouched();
      alert('Please fill out all fields correctly.');
    }
  }
}
