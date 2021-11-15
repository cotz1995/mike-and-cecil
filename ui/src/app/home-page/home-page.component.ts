import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'
import { ProceedingEvent } from '../models/proceeding-event'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  proceedingEvents: ProceedingEvent[] =[]

  ngOnInit (): void {
    this.populateEvents()
  }

  populateEvents () {
    const places = environment.places

    environment.events.forEach(event => {
      const place = places.get(event.placeKey)

      const proceedingEvent = {
        name: event.name,
        place: place,
        date: event.date,
        time: event.time
      } as ProceedingEvent

      this.proceedingEvents.push(proceedingEvent)
    })
  }
}
