import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProceedingEvent } from '../models/proceeding-event';

@Injectable({
  providedIn: 'root'
})
export class EventPlaceService {

  constructor() { }

  getEvent(index: number){
    return this.mapFromEnvironmentEvent(environment.events[index])
  }

  getEvents(): ProceedingEvent[] {
    const proceedingEvents: ProceedingEvent[] = []
    environment.events.forEach(event => {   
      const proceedingEvent = this.mapFromEnvironmentEvent(event)
      proceedingEvents.push(proceedingEvent)
    })

    return proceedingEvents
  }

  private mapFromEnvironmentEvent(environmentEvent: any): ProceedingEvent {
    const place = environment.places.get(environmentEvent.placeKey)

    return {
      name: environmentEvent.name,
      place: place,
      date: environmentEvent.date,
      time: environmentEvent.time
    } as ProceedingEvent
  }
}
