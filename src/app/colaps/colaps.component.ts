import {Component, Input, OnInit} from '@angular/core';
import {UserserviceService} from '../userservice.service';

@Component({
  selector: 'app-colaps',
  templateUrl: './colaps.component.html',
  styleUrls: ['./colaps.component.css']
})
export class ColapsComponent implements OnInit {
  expanded = false;
  @Input() mainText;
  constructor(private serv: UserserviceService) { }

  ngOnInit(): void {
  }

  toggleExpand(): void {
    this.expanded = !this.expanded;
  }
}
