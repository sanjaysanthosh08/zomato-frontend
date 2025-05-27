import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { LoginDTO } from '../models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  loginUser(form: NgForm) {
    if (!form.valid) {
      alert('Please fill all fields correctly');
      return;
    }

    const loginData: LoginDTO = {
      username: this.username,
      password: this.password
    };

    this.authService.login(loginData).subscribe({
      next: (token) => {
        if (token && token.length > 10) {
          this.authService.saveToken(token);
          alert('Login successful!');
          this.router.navigate(['/home']);
        } else {
          alert('Invalid credentials');
        }
      },
      error: (err) => {
        alert('Login failed: ' + (err.error || 'Server error'));
        console.error(err);
      }
    });
  }
}
