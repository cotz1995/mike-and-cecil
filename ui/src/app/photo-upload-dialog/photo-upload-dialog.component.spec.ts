import type { ComponentFixture } from '@angular/core/testing'
import { TestBed } from '@angular/core/testing'

import { PhotoUploadDialogComponent } from './photo-upload-dialog.component'

describe('PhotoUploadDialogComponent', () => {
  let component: PhotoUploadDialogComponent
  let fixture: ComponentFixture<PhotoUploadDialogComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoUploadDialogComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoUploadDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
