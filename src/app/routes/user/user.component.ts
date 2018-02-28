import { Component, OnInit } from '@angular/core';
import { User } from '../../core/models/user';
import { UserService } from '../../core/services/user.service';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  data : Array<User>;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers().then(
      res => this.data = res
    );
  }

}
