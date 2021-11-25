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
  cardWidthEm = 15
  rowHeightEm = 13
  minGutterSizeEm = 2
  gutterSizeEm = this.minGutterSizeEm
  heightOfSingleCardEm = 10

  public get rowHeightStr () {
    return `${this.rowHeightEm}em`
  }

  public get gutterSizeStr () {
    return `${this.gutterSizeEm}em`
  }

  calculateColumns (widthPx: number): number {
    const widthEm = widthPx / this.pxToEmRatio
    return Math.trunc(widthEm / (this.cardWidthEm + this.minGutterSizeEm))
  }

  calculateGutter (widthPx: number, columns: number): number {
    if (columns === 1) { return this.minGutterSizeEm }

    const widthEm = widthPx / this.pxToEmRatio
    const columnWidthEm = widthEm / columns
    return columnWidthEm - this.cardWidthEm + this.minGutterSizeEm
  }

  onBoardResized (event: ResizedEvent) {
    const widthPx = event.newRect.width
    this.columns = this.calculateColumns(widthPx)
    this.gutterSizeEm = this.calculateGutter(widthPx, this.columns)
  }

  onMessageResized (event: ResizedEvent, index: number) {
    this.rowSpans.set(index, this.calculateRowSpan(event.newRect.height))
  }

  calculateRowSpan (heightPx: number): number {
    const heightEm = heightPx / this.pxToEmRatio
    const rowspan = heightEm / this.rowHeightEm + 1
    return Math.trunc(rowspan)
  }

  getRowSpan (index: number): number {
    return this.rowSpans.get(index) ?? 1
  }

  cardStyle (rowspan: number): string {
    const totalCardHeight = this.heightOfSingleCardEm + (rowspan - 1) * (this.rowHeightEm + this.gutterSizeEm)
    return `height: ${totalCardHeight}em`
  }
}
