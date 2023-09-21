import { Component } from '@angular/core';
import {User} from "../shared/model/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-IFPB';
  user: User;
  users: Array<User>;

  constructor() {
    this.users = new Array<User>();
    this.user = new User();
  }

  insertUser(): void {
    this.users.push(this.user);
    this.user = new User();
  }
}
