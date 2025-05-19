import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="categories-container">
      <h2>Food Categories</h2>
      <div class="categories-grid">
        <div class="category-card" *ngFor="let category of foodCategories">
          <h3>{{ category }}</h3>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .categories-container {
      padding: 2rem;
      text-align: center;
    }

    h2 {
      color: #d32f2f;
      margin-bottom: 1.5rem;
    }

    .categories-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
    }

    .category-card {
      background-color: #ffe5e5;
      padding: 1.5rem;
      border-radius: 10px;
      width: 180px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: transform 0.2s ease;
    }

    .category-card:hover {
      background-color: #fce4ec;
      transform: scale(1.05);
    }
  `]
})
export class CategoriesComponent {
  foodCategories: string[] = [
    'Pizza',
    'Burgers',
    'Biryani',
    'Desserts',
    'Chinese',
    'South Indian'
  ];
}
