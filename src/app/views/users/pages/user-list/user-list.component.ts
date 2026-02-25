
import { Component, effect } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],  // include CommonModule, RouterModule as needed
  templateUrl: './user-list.component.html'
})
export class UserListComponent {
  users: User[] = [];

  constructor(private router: Router, private userService: UserService) {
    // Use effect to react when users signal changes
    effect(() => {
      this.users = this.userService.users();
    });
  }

  addUser() {
    this.router.navigate(['/users/add']);
  }

  deleteUser(index: number) {
    this.userService.deleteUser(index);
  }
}