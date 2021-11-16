import type { OnInit } from '@angular/core'
import { Component } from '@angular/core'

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {
  constructor () { } // eslint-disable-line no-useless-constructor,@typescript-eslint/no-empty-function

  ngOnInit (): void { // eslint-disable-line @typescript-eslint/no-empty-function
  }
}
