import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingRoutingModule } from './booking-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingComponent } from './booking.component';



@NgModule({
  declarations: [
    BookingComponent,
    BookingListComponent,
    BookingFormComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [BookingComponent]
})
export class BookingModule { }
