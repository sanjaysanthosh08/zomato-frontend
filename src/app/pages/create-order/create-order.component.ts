import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
  orderedItems: any[] = [];
  grandTotal: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const state = history.state;

    if (state && state.selectedItems) {
      this.orderedItems = state.selectedItems.map((item: any) => ({ ...item }));
    } else {
      const stored = localStorage.getItem('selectedItems');
      this.orderedItems = stored ? JSON.parse(stored) : [];
    }

    this.calculateGrandTotal();
  }

  calculateGrandTotal() {
    this.grandTotal = this.orderedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  increase(item: any) {
    item.quantity++;
    this.updateStorage();
  }

  decrease(item: any) {
    if (item.quantity > 0) {
      item.quantity--;
      this.updateStorage();
    }
  }

  updateStorage() {
    this.calculateGrandTotal();
    localStorage.setItem('selectedItems', JSON.stringify(this.orderedItems));
  }

  goBack() {
    localStorage.setItem('selectedItems', JSON.stringify(this.orderedItems)); // ✅ Save state before going back
    this.router.navigate(['/food-items']);
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  clearOrder() {
    localStorage.removeItem('selectedItems');
    this.orderedItems = [];
    this.grandTotal = 0;
  }

  placeOrder() {
    this.router.navigate(['/place-order'], {
      state: { orderItems: this.orderedItems, grandTotal: this.grandTotal }
    });
  }
}
