import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`);
  }

  getServices(): Observable<any> {
    return this.http.get(`${this.apiUrl}/services`);
  }

  getCareers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/careers`);
  }

  getInquiries(): Observable<any> {
    return this.http.get(`${this.apiUrl}/inquiries`);
  }

  postInquiry(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/inquiries`, data);
  }
}