import { Component, Input, OnInit } from '@angular/core'
import { ProceedingEvent } from '../models/proceeding-event'

@Component({
  selector: 'app-event-tile',
  templateUrl: './event-tile.component.html',
  styleUrls: ['./event-tile.component.css']
})
export class EventTileComponent implements OnInit {
  @Input()
  event: ProceedingEvent = {} as ProceedingEvent;

  @Input()
  eventIndex: number = -1

  
  get eventDetailRoute() : string {
    return `./event/${this.eventIndex}`
  }
  
  ngOnInit (): void {
  }
}
