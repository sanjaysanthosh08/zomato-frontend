import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OrderService } from './order.service'; // Ensure path is correct

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {
  orderItems: any[] = [];
  grandTotal: number = 0;

  constructor(private router: Router, private orderService: OrderService) {}

  ngOnInit(): void {
    const state = history.state;
    if (state && state.orderItems && state.grandTotal !== undefined) {
      this.orderItems = state.orderItems;
      this.grandTotal = state.grandTotal;
    } else {
      const stored = localStorage.getItem('selectedItems');
      this.orderItems = stored ? JSON.parse(stored) : [];
      this.grandTotal = this.orderItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    }
  }

  confirmOrder() {
    const orderPayload = {
      orderDate: new Date().toISOString().split('T')[0], // format: YYYY-MM-DD
      totalAmount: this.grandTotal,
      orderItems: this.orderItems.map((item: any) => ({
        itemName: item.name,     // match with OrderItemEntity
        quantity: item.quantity,
        price: item.price
      }))
    };

    this.orderService.placeOrder(orderPayload).subscribe({
      next: (response) => {
        alert('✅ Order placed successfully!');
        localStorage.removeItem('selectedItems');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Order submission failed:', err);
        alert('❌ Failed to place order. Please try again.');
      }
    });
  }

  goBack() {
    this.router.navigate(['/create-order']);
  }
}
