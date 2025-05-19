import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  loginUser(form: NgForm) {
    if (form.valid) {
      const loginData = {
        username: this.username,
        password: this.password
      };

      this.authService.login(loginData).subscribe({
        next: (res) => {
          if (res && typeof res === 'string' && res.length > 10) {
            this.authService.saveToken(res); // Save JWT
            localStorage.setItem('isLoggedIn', 'true');
            alert('Login Successful!');
            this.router.navigate(['/home']);
          } else {
            alert('Invalid login credentials.');
          }
        },
        error: (err) => {
          alert('Login failed. Please check your username and password.');
          console.error(err);
        }
      });
    } else {
      form.control.markAllAsTouched();
      alert('Please fill out all fields correctly.');
    }
  }
}
