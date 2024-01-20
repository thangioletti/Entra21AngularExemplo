import { Component } from '@angular/core';
import { UserService } from 'src/app/backend/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  public users: any = [];
  public constructor(private userService: UserService) {
    this.userService.get().subscribe(result => {
      this.users = result;
    })
  }
}
