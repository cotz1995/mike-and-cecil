import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomePageComponent } from './home-page/home-page.component'
import { ProceedingsComponent } from './proceedings/proceedings.component'

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'proceedings',
    component: ProceedingsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
