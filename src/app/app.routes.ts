import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { RestaurantItemsComponent } from './pages/restaurent-items/restaurent-items.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { HomeComponent } from './pages/home/home.component';
import { FoodItemsComponent } from './pages/food-items/food-items.component';
import { PlaceOrderComponent } from './pages/place-order/place-order.component';
import { AuthGuard } from './pages/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'food-category', component: CategoriesComponent, canActivate: [AuthGuard] },
  { path: 'restaurent-items', component: RestaurantItemsComponent, canActivate: [AuthGuard] },
  { path: 'create-order', component: CreateOrderComponent, canActivate: [AuthGuard] },
  { path: 'place-order', component: PlaceOrderComponent, canActivate: [AuthGuard] },
  { path: 'food-items', component: FoodItemsComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: 'login' }
];
