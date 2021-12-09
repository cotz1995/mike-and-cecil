import { HttpClient } from '@angular/common/http' // eslint-disable-line @typescript-eslint/consistent-type-imports
import { Injectable } from '@angular/core'
import type { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import type { Rsvp } from './models/rsvp'

@Injectable({
  providedIn: 'root'
})
export class RsvpService {
  constructor (private http: HttpClient) { } // eslint-disable-line no-useless-constructor

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  postRsvp (rsvp: Rsvp) : Observable<any> {
    return this.http.post(`${environment.apiUrlRoot}/rsvps`, rsvp)
  }
}
