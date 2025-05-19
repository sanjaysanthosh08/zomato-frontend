import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

  goTo(path: string) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
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
