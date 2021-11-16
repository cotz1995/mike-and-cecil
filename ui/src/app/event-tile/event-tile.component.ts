import { Component, Input } from '@angular/core'
import type { EventPlace } from '../models/event-place'

@Component({
  selector: 'app-event-tile',
  templateUrl: './event-tile.component.html',
  styleUrls: ['./event-tile.component.css']
})
export class EventTileComponent {
  @Input()
  event: EventPlace = {} as EventPlace;

  @Input()
  eventKey = ''

  get eventDetailRoute () : string {
    return `./event/${this.eventKey}`
  }
}
