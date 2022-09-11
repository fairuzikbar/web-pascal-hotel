import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingListComponent } from './booking-list/booking-list.component';

const routes: Routes = [
  {
    path: 'form',
    component: BookingFormComponent,
  },
  {
    path: 'form/:id',
    component: BookingFormComponent,
  },
  {
    path: 'list',
    component: BookingListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
