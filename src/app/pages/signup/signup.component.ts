import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { SignupDTO } from '../models/user.model';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  passwordMismatch = false;

  constructor(private authService: AuthService, private router: Router) {}

  signupUser(form: NgForm) {
    if (!form.valid) {
      alert('Please fill all fields correctly');
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.passwordMismatch = true;
      alert('Passwords do not match');
      return;
    }

    const signupData: SignupDTO = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.authService.signup(signupData).subscribe({
      next: (message) => {
        if (message === 'User registered successfully') {
          alert('Signup successful! Please login.');
          this.router.navigate(['/login']);
        } else {
          alert(message);
        }
      },
      error: (err) => {
        alert('Signup failed: ' + (err.error || 'Server error'));
        console.error(err);
      }
    });
  }
}
