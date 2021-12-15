import { Injectable } from '@angular/core'
import type { Observable } from 'rxjs'
import { toArray, mergeMap, map } from 'rxjs'
import { HttpClient } from '@angular/common/http' // eslint-disable-line @typescript-eslint/consistent-type-imports
import { environment } from 'src/environments/environment'
import type { Photo } from '../models/photo'

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor (private http: HttpClient) { } // eslint-disable-line no-useless-constructor

  getPhotos (): Observable<Photo[]> {
    return this.http.get<ApiKeys>(`${environment.apiUrlRoot}/photos`)
      .pipe(
        mergeMap(photoKeys => photoKeys.keys.map(photoKey => {
          return this.http.get<ApiPhoto>(`${environment.apiUrlRoot}/photos/${photoKey}`)
            .pipe(
              map(apiPhoto => this.mapApiPhotoToPhoto(apiPhoto))
            )
        })),
        mergeMap(item => item),
        toArray()
      )
  }

  mapApiPhotoToPhoto (apiPhoto: ApiPhoto) {
    const photoUrl = `${environment.photosUrlRoot}/${apiPhoto.key}`
    return {
      url: photoUrl,
      key: apiPhoto.key,
      heightPx: apiPhoto.metadata.height,
      widthPx: apiPhoto.metadata.width
    } as Photo
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

class ApiKeys {
  keys: string[] = []
}
