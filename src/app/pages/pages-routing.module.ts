import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RouteGuard } from '../shared/guard/route.guard'

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  {
    path: 'booking',
    canActivate: [RouteGuard],
    canActivateChild: [RouteGuard],
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule)
  }
]

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }