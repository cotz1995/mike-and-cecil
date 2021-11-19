import type { ComponentFixture } from '@angular/core/testing'
import { TestBed } from '@angular/core/testing'

import { MessageCreateDialogComponent } from './message-create-dialog.component'

describe('MessageCreateDialogComponent', () => {
  let component: MessageCreateDialogComponent
  let fixture: ComponentFixture<MessageCreateDialogComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageCreateDialogComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageCreateDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
