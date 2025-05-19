import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-restaurent-items',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './restaurent-items.component.html',
  styleUrls: ['./restaurent-items.component.scss']
})
export class RestaurantItemsComponent implements OnInit {
  restaurantItems: any[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchRestaurants();
  }

  fetchRestaurants() {
    this.http.get<any[]>('http://localhost:8080/api/restaurants')
      .subscribe(data => {
        this.restaurantItems = data;
      });
  }

  orderItem(itemName: string) {
    this.router.navigate(['/food-items'], { queryParams: { restaurant: itemName } });
  }
}
