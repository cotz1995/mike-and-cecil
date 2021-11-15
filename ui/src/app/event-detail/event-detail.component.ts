import type { OnInit } from '@angular/core'
import { Component } from '@angular/core'
import type { ActivatedRoute } from '@angular/router'
import { ProceedingEvent } from '../models/proceeding-event'
import type { EventPlaceService } from '../services/event-place.service'

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: ProceedingEvent = new ProceedingEvent()

  constructor ( // eslint-disable-line
    private eventPlaceService: EventPlaceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit (): void {
    this.getEvent()
  }

  getEvent (): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.event = this.eventPlaceService.getEvent(id)
  }
}
