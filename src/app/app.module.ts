import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { BookingModule } from './pages/booking/booking.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    SharedModule,
    FontAwesomeModule,
    AppRoutingModule, // Untuk memunculkan routerLink
    PagesRoutingModule,
    AuthModule,
    BookingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
