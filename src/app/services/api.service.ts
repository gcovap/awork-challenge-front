import { inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class ApiService {
  protected http = inject(HttpClient);
  protected readonly API_URL = environment.apiUrl;

  protected getDefaultHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }
  protected get<T>(endpoint: string) {
    return this.http.get<T>(`${this.API_URL}${endpoint}`, {
      headers: this.getDefaultHeaders(),
      withCredentials: true,
    });
  }
  protected post<T>(endpoint: string, body: any) {
    return this.http.post<T>(`${this.API_URL}${endpoint}`, body, {
      headers: this.getDefaultHeaders(),
      withCredentials: true,
    });
  }
}
