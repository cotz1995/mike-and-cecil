import { Component } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog' // eslint-disable-line @typescript-eslint/consistent-type-imports

@Component({
  selector: 'app-message-create-dialog',
  templateUrl: './message-create-dialog.component.html',
  styleUrls: ['./message-create-dialog.component.css']
})
export class MessageCreateDialogComponent {
  understandingCheck = false

  constructor (public dialogRef: MatDialogRef<MessageCreateDialogComponent>) { } // eslint-disable-line no-useless-constructor

  closeDialog () {
    this.dialogRef.close('daters')
  }
}
