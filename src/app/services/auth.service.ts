import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(user: { account: string; password: string }) {
    return this.httpClient.post(`${environment.apiUrl}login`, user);
  }

  register(user: { account: string; password: string }) {
    return this.httpClient.post(`${environment.apiUrl}register`, user);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  isLogin() {
    return !!this.getToken();
  }
}
