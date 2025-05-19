import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { RestaurantItemsComponent } from './pages/restaurent-items/restaurent-items.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { HomeComponent } from './pages/home/home.component'; // ✅ use new HomeComponent
import { FoodItemsComponent } from './pages/food-items/food-items.component'; // ✅ new route
import { PlaceOrderComponent } from './pages/place-order/place-order.component'; // ✅ import added

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'food-category', component: CategoriesComponent },
  { path: 'restaurent-items', component: RestaurantItemsComponent },
  { path: 'create-order', component: CreateOrderComponent },
  { path: 'place-order', component: PlaceOrderComponent }, // ✅ added route
  { path: 'home', component: HomeComponent },
  { path: 'food-items', component: FoodItemsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
 