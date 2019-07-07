import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Input() dialog;
  @Output() authorMentioned = new EventEmitter<string>();

  public dbHandler(authorName: string): void {
    this.authorMentioned.emit(authorName);
  }
}
