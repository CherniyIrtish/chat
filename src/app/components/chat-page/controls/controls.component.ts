import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  @Input() set mentionAuthor(mentionedAuthorName: string) {
    if (!mentionedAuthorName) {
      return;
    }

    const message = this.messageForm.get('message').value + `@${mentionedAuthorName}`;
    this.messageForm.patchValue({message});
  }

  @Output() sendMessage = new EventEmitter<any>();

  public messageForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  public onSend(): void {
    this.sendMessage.emit(this.messageForm.get('message').value);
    this.messageForm.get('message').reset();
  }

  private initForm(): void {
    this.messageForm = this.formBuilder.group({
      message: ['', Validators.minLength(2)],
    });
  }
}
