import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router, private authService: AuthService) {}

  goTo(path: string) {
    if (!this.authService.isLoggedIn()) {
      alert('Please login to access this page.');
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/' + path]);
    }
  }

  goExplore() {
    this.goTo('restaurent-items');
  }
}
