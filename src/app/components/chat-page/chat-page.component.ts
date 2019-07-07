import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../services/firebase.service';

import { from } from 'rxjs';


@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {

  public mentionAuthor: string;
  public dialog: IDialog[] = [];
  public users: IUser[];
  private _chosenUser;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.getUsers()
      .subscribe((users) => {
        this.users = this._getPreparedUsers(users);
      });
  }

  public userChosenHandler(user): void {
    this._chosenUser = user;
    this.firebaseService.getDialog()
      .subscribe((dialog) => {
        this.dialog = this._getPreparedDialog(dialog);
        this.dialog.sort((prev, next) => prev.time - next.time);
      });
  }

  public sendMessageHandler(text): void {
    from(this.firebaseService.sendMessage(this._getPreparedMessage(text)))
      .subscribe();
  }

  public authorMentioned(mentionedAuthorName: string): void {
    this.mentionAuthor = mentionedAuthorName;
  }

  private _getPreparedUsers(users): IUser[] {
    return users.map(e => ({id: e.payload.doc.id, author: e.payload.doc.data()['author']}));
  }

  private _getPreparedDialog(dialog): IDialog[] {
    return dialog.map(e => {
      return {
        id: e.payload.doc.id,
        author: e.payload.doc.data()['authorName'],
        ownerId: e.payload.doc.data()['ownerId'],
        text: e.payload.doc.data()['text'],
        time: e.payload.doc.data()['time'],
      };
    });
  }

  private _getPreparedMessage(text: string): IMessage {
    return {
      text,
      ownerId: this._chosenUser.id,
      authorName: this._chosenUser.author,
      time: new Date().getTime(),
    };
  }
}
