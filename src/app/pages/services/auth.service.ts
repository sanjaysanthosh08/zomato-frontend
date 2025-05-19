import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  signup(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, data, { responseType: 'text' });
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data, { responseType: 'text' });
  }

  saveToken(token: string): void {
    localStorage.setItem('jwtToken', token);
    localStorage.setItem('isLoggedIn', 'true');
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
    localStorage.setItem('isLoggedIn', 'false');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
