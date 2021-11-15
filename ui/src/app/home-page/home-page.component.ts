import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'
import { ProceedingEvent } from '../models/proceeding-event'
import { EventPlaceService } from '../services/event-place.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  proceedingEvents: ProceedingEvent[] =[]

  constructor(private eventPlaceService: EventPlaceService) {
  }

  ngOnInit (): void {
    this.proceedingEvents = this.eventPlaceService.getEvents()
  }
}
