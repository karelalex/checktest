import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {UserserviceService} from '../userservice.service';

export interface User{
  'id': number;
  'name': string;
  'email': string;
  'address': {
    'street': string,
    'suite': string
    'city': string
    'zipcode': string
  };
  'phone': string;
  'website': string;
  'company': {
    'name': string
    'catchPhrase': string
    'bs': string
  };
}

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  errorMessage = '';
  constructor(private route: ActivatedRoute,
              private serv: UserserviceService) { }

  userForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', Validators.email),
    address: new FormGroup({
      street: new FormControl(),
      suite: new FormControl(),
      city: new FormControl(),
      zip: new FormControl(),
    }),
    phone: new FormControl(),
    website: new FormControl(),
    company: new FormControl()
  });
  ngOnInit(): void {
    this.serv.loadInfo(this.route.snapshot.params.id).subscribe(
      (data): void => {
        this.userForm.patchValue({
          name: data.name,
          email: data.email,
          address: {
            street: data.address.street,
            suite: data.address.suite,
            city: data.address.city,
            zip: data.address.zipcode,
          },
          phone: data.phone,
          website: data.website,
          company: data.company
        });
      },
      error => {
        this.errorMessage = 'Ошибка загрузки данных, форма может работать некорректно';
      }
    );
  }

}
