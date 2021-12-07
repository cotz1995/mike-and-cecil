import { Input, Component } from '@angular/core'
import type { ResizedEvent } from 'angular-resize-event'
import type { Photo } from '../models/photo'

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent {
  @Input()
  photos: Photo[] = []

  rowSpans = new Map<number, number>()

  pxToEmRatio = 16
  columns = 1
  columnWidthPx = 5 * this.pxToEmRatio
  rowHeightPx = 16 * this.pxToEmRatio
  minGutterSizePx = 1 * this.pxToEmRatio
  gutterSizePx = this.minGutterSizePx
  boardWidthPx = 0

  public get rowHeightStr () {
    return `${this.rowHeightPx}px`
  }

  public get gutterSizeStr () {
    return `${this.gutterSizePx}px`
  }

  calculateColumns (widthPx: number): number {
    return Math.trunc(widthPx / (this.columnWidthPx + this.minGutterSizePx))
  }

  calculateGutter (widthPx: number, columns: number): number {
    if (columns === 1) { return this.minGutterSizePx }

    const totalColumnWidthEm = widthPx / columns
    return totalColumnWidthEm - this.columnWidthPx + this.minGutterSizePx
  }

  onBoardResized (event: ResizedEvent) {
    this.boardWidthPx = event.newRect.width
    this.columns = this.calculateColumns(this.boardWidthPx)
    this.gutterSizePx = this.calculateGutter(this.boardWidthPx, this.columns)
  }

  getResizedDimensions (photo: Photo): Dimensions {
    const newToOldRatio = (this.rowHeightPx) / photo.heightPx
    return {
      widthPx: photo.widthPx * newToOldRatio,
      heightPx: photo.heightPx * newToOldRatio
    } as Dimensions
  }

  getColumnSpan (photoDimensions: Dimensions): number {
    const columnSpan = 1 + ((photoDimensions.widthPx - this.columnWidthPx) / (this.columnWidthPx + this.gutterSizePx))
    return columnSpan < this.columns ? columnSpan : this.columns
  }

  getImageHeight (photoDimensions: Dimensions): number {
    return photoDimensions.heightPx
  }

  getImageWidth (photoDimensions: Dimensions): number {
    return photoDimensions.widthPx
  }
}

class Dimensions {
  widthPx = 0
  heightPx = 0
}
