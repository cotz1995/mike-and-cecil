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

  rowSpans = new Map<number, number>()

  pxToEmRatio = 16
  columns = 1
  cardWidth = 15
  rowHeight = 13
  gutterSize = 1

  public get rowHeightStr () {
    return `${this.rowHeight}em`
  }

  public get gutterSizeStr () {
    return `${this.gutterSize}em`
  }

  calculateColumns (width: number): number {
    return Math.trunc(width / (15 * this.pxToEmRatio))
  }

  calculateGutter (width: number, columns: number): number {
    if (columns === 1) { return 1 }

    const columnWidth = width / (columns * this.pxToEmRatio)
    return columnWidth - this.cardWidth + 1
  }

  onBoardResized (event: ResizedEvent) {
    const width = event.newRect.width
    this.columns = this.calculateColumns(width)
    this.gutterSize = this.calculateGutter(width, this.columns)
  }

  onMessageResized (event: ResizedEvent, index: number) {
    this.rowSpans.set(index, this.calculateRowSpan(event.newRect.height))
  }

  calculateRowSpan (heightPx: number): number {
    const heightEm = heightPx / this.pxToEmRatio
    const rowspan = heightEm / this.rowHeight + 1
    return Math.trunc(rowspan)
  }

  getRowSpan (index: number): number {
    return this.rowSpans.get(index) ?? 1
  }

  cardStyle (rowspan: number): string {
    const heightOfSingleCard = 10
    const totalCardHeight = heightOfSingleCard + (rowspan - 1) * (this.rowHeight + this.gutterSize)
    return `height: ${totalCardHeight}em`
  }
}
