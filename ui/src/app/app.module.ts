import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDialogModule } from '@angular/material/dialog'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatInputModule } from '@angular/material/input'
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar'
import { MatToolbarModule } from '@angular/material/toolbar'

import { HomePageComponent } from './home-page/home-page.component'
import { EventTileComponent } from './event-tile/event-tile.component'
import { EventDetailComponent } from './event-detail/event-detail.component'
import { GoFundMeEmbedComponent } from './go-fund-me-embed/go-fund-me-embed.component'
import { MessageBoardComponent } from './message-board/message-board.component'
import { MessageCreateDialogComponent } from './message-create-dialog/message-create-dialog.component'
import { CardGalleryComponent } from './card-gallery/card-gallery.component'
import { AngularResizeEventModule } from 'angular-resize-event'
import { AnnouncementComponent } from './announcement/announcement.component'
import { PhotoBoardComponent } from './photo-board/photo-board.component'
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component'
import { RsvpComponent } from './rsvp/rsvp.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EventTileComponent,
    EventDetailComponent,
    GoFundMeEmbedComponent,
    MessageBoardComponent,
    MessageCreateDialogComponent,
    CardGalleryComponent,
    AnnouncementComponent,
    PhotoBoardComponent,
    PhotoGalleryComponent,
    RsvpComponent
  ],
  imports: [
    AngularResizeEventModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000 } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
