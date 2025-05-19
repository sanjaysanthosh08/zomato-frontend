import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-items',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.scss']
})
export class FoodItemsComponent {
  restaurantName = 'Awesome Restaurant';
  foodItems: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchFoodItems();
  }

  fetchFoodItems() {
    this.http.get<any[]>('http://localhost:8080/api/foods').subscribe(data => {
      const storedItems = JSON.parse(localStorage.getItem('selectedItems') || '[]');

      this.foodItems = data.map(item => {
        const existing = storedItems.find((s: any) => s.name === item.name);
        return {
          ...item,
          quantity: existing ? existing.quantity : 0
        };
      });
    });
  }

  increase(item: any) {
    item.quantity++;
  }

  decrease(item: any) {
    if (item.quantity > 0) item.quantity--;
  }

  placeOrder() {
    const selectedItems = this.foodItems.filter(item => item.quantity > 0);
    if (selectedItems.length > 0) {
      localStorage.setItem('selectedItems', JSON.stringify(selectedItems)); // ✅ Save to localStorage
      this.router.navigate(['/create-order'], {
        state: { selectedItems }
      });
    } else {
      alert("Please add at least one item to cart!");
    }
  }
}
