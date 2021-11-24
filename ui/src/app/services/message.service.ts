import { Injectable } from '@angular/core'
import type { Observable } from 'rxjs'
import type { Message } from '../models/message'
import { HttpClient } from '@angular/common/http' // eslint-disable-line @typescript-eslint/consistent-type-imports
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor (private http: HttpClient) { } // eslint-disable-line no-useless-constructor

  getMessages (): Observable<Message[]> {
    return this.http.get<Message[]>(`${environment.apiUrlRoot}/messages`)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  postMessage (message: Message): Observable<any> {
    return this.http.post(`${environment.apiUrlRoot}/messages`, message)
  }
}
