import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './shared/component/main-slider/main-slider.component';
import { RouterModule } from '@angular/router';
import { MoviedashboardComponent } from './shared/component/moviedashboard/moviedashboard.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { MoviedetailComponent } from './shared/component/moviedetail/moviedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSliderComponent,
    MoviedashboardComponent,
    NavbarComponent,
    MoviedetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
