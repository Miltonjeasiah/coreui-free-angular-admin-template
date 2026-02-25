import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';

export const usersRoutes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'add', component: AddUserComponent },
];