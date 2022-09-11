import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home/home-routing.module';
import { PagesRoutingModule } from './pages-routing.module';
import { BookingComponent } from './booking/booking.component';
import { BookingRoutingModule } from './booking/booking-routing.module';


@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    HomeRoutingModule,
    PagesRoutingModule,
    BookingRoutingModule
  ],
  exports: [PagesComponent]
})
export class PagesModule { }
