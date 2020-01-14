import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/stockManagement-MySQL/products/';

  constructor(
    private http: HttpClient
  ) {}

  public getAll() {
    return this.http.get(this.apiUrl);
  }

  public deleteProduct(id: number) {
    return this.http.delete(this.apiUrl + id);
  }
}
