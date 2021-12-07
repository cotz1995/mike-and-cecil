import type { OnInit } from '@angular/core'
import { Component } from '@angular/core'
import { environment } from 'src/environments/environment'
import type { Photo } from '../models/photo'
import { PhotoService } from '../services/photo.service' // eslint-disable-line @typescript-eslint/consistent-type-imports

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.css']
})
export class PhotoBoardComponent implements OnInit {
  photos: Photo[] = []
  constructor (private photoService: PhotoService) { } // eslint-disable-line no-useless-constructor

  ngOnInit (): void {
    this.photoService.getPhotoKeys().subscribe({
      next: photos => {
        this.photos = photos
      }
    })
  }

  getPhotoUrl (key: string): string {
    return `${environment.photosUrlRoot}/${key}`
  }
}
