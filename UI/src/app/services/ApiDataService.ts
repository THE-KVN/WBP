import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  private baseUrl = 'http://localhost:7010'; // Replace with your actual base URL

  //private baseUrl = 'https://localhost:7010'; // Replace with your actual base URL

  constructor(private http: HttpClient) { }

  // Generic GET method
  get<T>(endpoint: string): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.get<T>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Generic POST method
  post<T>(endpoint: string, data: any): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<T>(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Generic PUT method
  put<T>(entity: string, id: number, data: any): Observable<T> {
    const url = `${this.baseUrl}/${entity}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put<T>(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Generic DELETE method
  delete<T>(entity: string, id: number): Observable<T> {
    const url = `${this.baseUrl}/${entity}/${id}`;
    return this.http.delete<T>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Error handling helper
  private handleError(error: any) {
    console.error('Error occurred:', error);
    return throwError(error.message || 'Server error');
  }
}
