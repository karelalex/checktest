import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserlistComponent} from './userlist/userlist.component';
import {UserInfoComponent} from './user-info/user-info.component';

const routes: Routes = [
  {path: 'list', component: UserlistComponent},
  {path: 'info/:id', component: UserInfoComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
