import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  getProducts(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}products`);
  }

  createOrder(products: any[]): Observable<{ success: boolean }> {
    return this.httpClient.post<{ success: boolean }>(
      `${environment.apiUrl}orders`,
      products,
      {
        headers: { Authorization: `Bearer ${this.authService.getToken()}` }
      }
    );
  }
}
