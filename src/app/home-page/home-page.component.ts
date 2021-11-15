import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProceedingEvent } from '../models/proceeding-event';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  proceedingEvents: ProceedingEvent[] =[]
  constructor() { }

  ngOnInit(): void {
    this.populateEvents()
  }

  populateEvents() {
    let places = environment.places;

    environment.events.forEach(event => {
      let place = places.get(event.placeKey);

      let proceedingEvent = {
        name: event.name,
        place: place,
        date: event.date,
        time: event.time
      } as ProceedingEvent;

      this.proceedingEvents.push(proceedingEvent);
    });
  }
}
