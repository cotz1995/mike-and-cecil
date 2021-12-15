import type { OnInit } from '@angular/core'
import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog' // eslint-disable-line @typescript-eslint/consistent-type-imports
import { environment } from 'src/environments/environment'
import type { Photo } from '../models/photo'
import { PhotoUploadDialogComponent } from '../photo-upload-dialog/photo-upload-dialog.component'
import { PhotoService } from '../services/photo.service' // eslint-disable-line @typescript-eslint/consistent-type-imports

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.css']
})
export class PhotoBoardComponent implements OnInit {
  photos: Photo[] = []

  // eslint-disable-next-line no-useless-constructor
  constructor (
    private photoService: PhotoService,
    private dialog: MatDialog
  ) { }

  ngOnInit (): void {
    this.photoService.getPhotos().subscribe({
      next: photos => {
        this.photos = photos
      }
    })
  }

  getPhotoUrl (key: string): string {
    return `${environment.photosUrlRoot}/${key}`
  }

  onUpoladButtonClicked () {
    const dialogRef = this.dialog.open(PhotoUploadDialogComponent, {
      height: '450px',
      width: '600px'
    })

    dialogRef.afterClosed().subscribe({
      // next: result => {
      // const message = result as Message
      // if (result && result.message.match(/^\s*$/) === null) { // regex => empty or whitespce
      //   this.messageService.postMessage(message).subscribe({
      //     next: () => {
      //       this.snackBar.open('message successfully posted')
      //       this.getMessages()
      //     },
      //     error: () => {
      //       console.error('$message post failed')
      //       this.snackBar.open('ERROR: message post failed')
      //     }
      //   })
      // }
      // }
    })
  }
}
