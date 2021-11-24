import type { OnInit } from '@angular/core'
import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog' // eslint-disable-line @typescript-eslint/consistent-type-imports
import { MatSnackBar } from '@angular/material/snack-bar' // eslint-disable-line @typescript-eslint/consistent-type-imports
import { MessageCreateDialogComponent } from '../message-create-dialog/message-create-dialog.component'
import type { Message } from '../models/message'
import { MessageService } from '../services/message.service' // eslint-disable-line @typescript-eslint/consistent-type-imports

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {
  messages: Message[] = []

  constructor ( // eslint-disable-line no-useless-constructor,@typescript-eslint/no-empty-function
    private messageService: MessageService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit (): void { // eslint-disable-line @typescript-eslint/no-empty-function
    this.getMessages()
  }

  getMessages () {
    this.messageService.getMessages().subscribe({ next: messages => { this.messages = messages } })
  }

  getMessageCardId (messageId: string) {
    return `message-card-${messageId}`
  }

  onCreateButtonClicked () {
    const dialogRef = this.dialog.open(MessageCreateDialogComponent, {
      height: '450px',
      width: '600px'
    })

    dialogRef.afterClosed().subscribe({
      next: result => {
        const message = result as Message
        if (result && result.message.match(/^\s*$/) === null) { // regex => empty or whitespce
          this.messageService.postMessage(message).subscribe({
            next: () => {
              this.snackBar.open('message successfully posted')
              this.getMessages()
            },
            error: () => {
              console.error('$message post failed')
              this.snackBar.open('ERROR: message post failed')
            }
          })
        }
      }
    })
  }
}
