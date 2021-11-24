import { Component } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog' // eslint-disable-line @typescript-eslint/consistent-type-imports
import type { Message } from '../models/message'

@Component({
  selector: 'app-message-create-dialog',
  templateUrl: './message-create-dialog.component.html',
  styleUrls: ['./message-create-dialog.component.css']
})
export class MessageCreateDialogComponent {
  understandingCheck = false
  message = ''

  constructor (public dialogRef: MatDialogRef<MessageCreateDialogComponent>) { } // eslint-disable-line no-useless-constructor

  submitClicked () {
    this.dialogRef.close({
      id: '',
      message: this.message,
      createdDate: new Date(Date.now()).toISOString()
    } as Message)
  }
}
