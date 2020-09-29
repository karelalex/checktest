import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  loadList(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  loadInfo(id): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
