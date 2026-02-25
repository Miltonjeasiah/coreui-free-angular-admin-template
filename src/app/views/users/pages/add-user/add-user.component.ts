import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { UserService, User } from '../../services/user.service';


@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['Viewer', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser: User = {
        name: this.userForm.value.name,
        email: this.userForm.value.email,
        role: this.userForm.value.role
      };
      this.userService.addUser(newUser);
      this.router.navigate(['/users']);
    }
  }

  cancel(): void {
    this.router.navigate(['/users']);
  }
}