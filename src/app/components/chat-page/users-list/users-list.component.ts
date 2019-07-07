import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  @Input() set setUsers(users) {
    if (!users) {
      return;
    }

    this.users = users;
    this.onUserChosen.emit(this.users[0]);
    this.chosenUserId = this.users[0].id;
  };

  @Output() onUserChosen = new EventEmitter<any>();

  public users;
  public chosenUserId: number;


  public chooseUser(user): void {
    this.chosenUserId = user.id;
    this.onUserChosen.emit(user);
  }
}
