import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { EventPlace } from '../models/event-place'

@Injectable({
  providedIn: 'root'
})
export class EventPlaceService {
  getEvent (key: string | null): EventPlace {
    if(key === null){
      console.warn('Searching for null key may cause unexpected results')
      return new EventPlace()
    }
    return this.mapFromEnvironmentEvent(environment.events.get(key))
  }

  getEvents (): Map<string, EventPlace> {
    const proceedingEvents = new Map<string, EventPlace>()
    environment.events.forEach((event, key) => {
      const proceedingEvent = this.mapFromEnvironmentEvent(event)
      proceedingEvents.set(key, proceedingEvent)
    })

    return proceedingEvents
  }

  private mapFromEnvironmentEvent (environmentEvent: any): EventPlace {
    const place = environment.places.get(environmentEvent.placeKey)

    return {
      name: environmentEvent.name,
      place: place,
      date: environmentEvent.date,
      time: environmentEvent.time
    } as EventPlace
  }
}
