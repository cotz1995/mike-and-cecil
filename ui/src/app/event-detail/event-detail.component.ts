import type { OnInit } from '@angular/core'
import { Component } from '@angular/core'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser' // eslint-disable-line @typescript-eslint/consistent-type-imports
import { ActivatedRoute } from '@angular/router' // eslint-disable-line @typescript-eslint/consistent-type-imports
import { ProceedingEvent } from '../models/proceeding-event'
import { EventPlaceService } from '../services/event-place.service' // eslint-disable-line @typescript-eslint/consistent-type-imports

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: ProceedingEvent = new ProceedingEvent()

  constructor ( // eslint-disable-line no-useless-constructor
    private eventPlaceService: EventPlaceService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit (): void {
    this.getEvent()
  }

  getEvent (): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.event = this.eventPlaceService.getEvent(id)
  }

  getGMapsUrl () : SafeResourceUrl {
    if (this.event.place.gMapsPlaceId !== '') {
      const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyD9wRYEAL78Jkk5pnkCyzXYaWBhQMz9qRY&q=place_id:${this.event.place.gMapsPlaceId}`
      return this.sanitizer.bypassSecurityTrustResourceUrl(url)
    }

    const encodedAddress = encodeURIComponent(`${this.event.place.address}, ${this.event.place.city}, ${this.event.place.state} ${this.event.place.zip}`)
    const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyD9wRYEAL78Jkk5pnkCyzXYaWBhQMz9qRY&q=${encodedAddress}`
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
