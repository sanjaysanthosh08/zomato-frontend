import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { SignupDTO, LoginDTO } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  signup(data: SignupDTO): Observable<string> {
    // Expect a plain string message from backend
    return this.http.post(this.baseUrl + '/signup', data, { responseType: 'text' });
  }

  login(data: LoginDTO): Observable<string> {
    // Expect JWT token string from backend
    return this.http.post(this.baseUrl + '/login', data, { responseType: 'text' }).pipe(
      tap(token => this.saveToken(token))
    );
  }

  saveToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
