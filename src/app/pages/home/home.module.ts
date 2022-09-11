import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home.component';
import { ServiceComponent } from './service/service.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AboutComponent,
    ServiceComponent,
    FacilitiesComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }