import { Injectable } from '@angular/core'
import type { Observable } from 'rxjs'
import { map } from 'rxjs'
import { HttpClient } from '@angular/common/http' // eslint-disable-line @typescript-eslint/consistent-type-imports
import { environment } from 'src/environments/environment'
import type { Photo } from '../models/photo'

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor (private http: HttpClient) { } // eslint-disable-line no-useless-constructor

  getPhotoKeys (): Observable<Photo[]> {
    return this.http.get<ApiPhoto[]>(`${environment.apiUrlRoot}/photos`).pipe(map(apiPhotos => apiPhotos.map(apiPhoto => {
      return {
        key: apiPhoto.key,
        height: apiPhoto.metadata.height,
        width: apiPhoto.metadata.width
      } as Photo
    })))
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // postMessage (message: Message): Observable<any> {
  //   return this.http.post(`${environment.apiUrlRoot}/messages`, message)
  // }
}

class ApiPhoto {
  key = ''
  metadata: {
    height: number
    width: number
  } = { height: 0, width: 0 }
}
