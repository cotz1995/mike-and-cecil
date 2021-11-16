import { NgModule } from '@angular/core'
import type { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'
import { EventDetailComponent } from './event-detail/event-detail.component'
import { HomePageComponent } from './home-page/home-page.component'

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'event',
    children: [
      { path: ':eventKey', component: EventDetailComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
