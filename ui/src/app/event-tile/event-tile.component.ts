import { Component, Input } from '@angular/core'
import type { ProceedingEvent } from '../models/proceeding-event'

@Component({
  selector: 'app-event-tile',
  templateUrl: './event-tile.component.html',
  styleUrls: ['./event-tile.component.css']
})
export class EventTileComponent {
  @Input()
  event: ProceedingEvent = {} as ProceedingEvent;

  @Input()
  eventIndex = -1

  get eventDetailRoute () : string {
    return `./event/${this.eventIndex}`
  }
}
