import type { ComponentFixture } from '@angular/core/testing'
import { TestBed } from '@angular/core/testing'

import { GoFundMeEmbedComponent } from './go-fund-me-embed.component'

describe('GoFundMeEmbedComponent', () => {
  let component: GoFundMeEmbedComponent
  let fixture: ComponentFixture<GoFundMeEmbedComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoFundMeEmbedComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(GoFundMeEmbedComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
