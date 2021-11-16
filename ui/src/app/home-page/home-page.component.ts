import { KeyValue } from '@angular/common'
import type { OnInit } from '@angular/core'
import { Component } from '@angular/core'
import type { EventPlace } from '../models/event-place'
import { EventPlaceService } from '../services/event-place.service' // eslint-disable-line @typescript-eslint/consistent-type-imports

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  proceedingEvents = new Map<string, EventPlace>()

  constructor (private eventPlaceService: EventPlaceService) { } // eslint-disable-line no-useless-constructor

  ngOnInit (): void {
    this.proceedingEvents = this.eventPlaceService.getEvents()
  }

  // HACK: a small hack to display the events in the order they are in the map and thus the environment file
  compareFn(a: KeyValue<string, EventPlace>, b: KeyValue<string, EventPlace>): number {
    return 1
  }
}
