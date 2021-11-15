import type { OnInit } from '@angular/core'
import { Component } from '@angular/core'
import type { ProceedingEvent } from '../models/proceeding-event'
import type { EventPlaceService } from '../services/event-place.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  proceedingEvents: ProceedingEvent[] =[]

  constructor (private eventPlaceService: EventPlaceService) { } // eslint-disable-line

  ngOnInit (): void {
    this.proceedingEvents = this.eventPlaceService.getEvents()
  }
}
