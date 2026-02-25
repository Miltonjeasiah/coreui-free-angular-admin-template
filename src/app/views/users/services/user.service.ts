import { Injectable, signal, WritableSignal } from '@angular/core';

export interface User {
  name: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _users: WritableSignal<User[]> = signal([
    { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' }
  ]);

  // Expose as read-only signal
  readonly users = this._users.asReadonly();

  addUser(user: User) {
    this._users.set([ ...this._users(), user ]);
  }

  deleteUser(index: number) {
    const list = this._users();
    list.splice(index, 1);
    this._users.set([ ...list ]);
  }
}