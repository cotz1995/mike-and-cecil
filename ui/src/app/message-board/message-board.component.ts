import type { OnInit } from '@angular/core'
import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog' // eslint-disable-line @typescript-eslint/consistent-type-imports
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

  constructor (private messageService: MessageService, private dialog: MatDialog) { } // eslint-disable-line no-useless-constructor,@typescript-eslint/no-empty-function

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
    this.dialog.open(MessageCreateDialogComponent, {
      height: '400px',
      width: '600px'
    })
  }
}
