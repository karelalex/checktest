import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../userservice.service';
import {Router} from '@angular/router';

export interface UserListItem {
  'id': number;
  'title': string;
  'body': string;
}
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userList: UserListItem[];
  constructor(private serv: UserserviceService,
              private router: Router) { }

  ngOnInit(): void {
    this.serv.loadList().subscribe((data) => {
      this.userList = data;
    });
  }

  goToInfo(id: number): void {
    this.router.navigate(['/info', id]);
  }

}
