
import { Component } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog' // eslint-disable-line @typescript-eslint/consistent-type-imports

@Component({
  selector: 'app-photo-upload-dialog',
  templateUrl: './photo-upload-dialog.component.html',
  styleUrls: ['./photo-upload-dialog.component.css']
})
export class PhotoUploadDialogComponent {
  understandingCheck = false

  constructor (public dialogRef: MatDialogRef<PhotoUploadDialogComponent>) { } // eslint-disable-line no-useless-constructor

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  submitClicked () {}
  fileSelected (event: any) {
    console.log('chosen file: ', event)
  }

  openFilePicker () {
    document.getElementById('photo-upload-diag-file-input')?.click()
  }
}
