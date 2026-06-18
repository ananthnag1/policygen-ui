import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) {}

  getMockData(): Observable<any> {
    // Change the limit from 3 to 4 here
    return this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=4');
  }
}