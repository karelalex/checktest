import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserListItem} from './userlist/userlist.component';
import {User} from './user-info/user-info.component';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  loadList(): Observable<UserListItem[]> {
    return this.http.get<UserListItem[]>('https://jsonplaceholder.typicode.com/posts');
  }

  loadInfo(id: number): Observable<User> {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
