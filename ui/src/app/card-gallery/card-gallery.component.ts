import { Input, Component } from '@angular/core'
import type { ResizedEvent } from 'angular-resize-event'
import type { Message } from '../models/message'

@Component({
  selector: 'app-card-gallery',
  templateUrl: './card-gallery.component.html',
  styleUrls: ['./card-gallery.component.css']
})
export class CardGalleryComponent {
  @Input()
  messages: Message[] = []

  pxToEmRatio = 16
  columns = 1
  rowHeight = 13
  public get rowHeightStr () {
    return `${this.rowHeight}em`
  }

  gutterSize = 1
  public get gutterSizeStr () {
    return `${this.gutterSize}em`
  }

  cardWidth = 15

  calculateColumns (width: number): number {
    return Math.trunc(width / (15 * this.pxToEmRatio))
  }

  calculateGutter (width: number, columns: number): number {
    if (columns === 1) { return 1 }

    const columnWidth = width / (columns * this.pxToEmRatio)
    return columnWidth - this.cardWidth + 1
  }

  onResized (event: ResizedEvent) {
    const width = event.newRect.width
    this.columns = this.calculateColumns(width)
    this.gutterSize = this.calculateGutter(width, this.columns)
  }

  calculateRowSpan (message: Message): number {
    const rowspan = message.message.length / 265

    return Math.trunc(rowspan + 1)
  }

  cardStyle (rowspan: number): string {
    const height = 10 + (rowspan - 1) * (this.rowHeight + this.gutterSize)
    return `height: ${height}em`
  }
}
