import {Component, Input, OnInit} from '@angular/core';
import {UserserviceService} from '../userservice.service';

@Component({
  selector: 'app-colaps',
  templateUrl: './colaps.component.html',
  styleUrls: ['./colaps.component.css']
})
export class ColapsComponent {
  expanded = false;
  @Input() mainText;
  constructor(private serv: UserserviceService) { }

  toggleExpand(): void {
    this.expanded = !this.expanded;
  }
}
