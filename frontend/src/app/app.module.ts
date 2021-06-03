import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ListVehiculeComponent } from './list-vehicule/list-vehicule.component';
import { DetailsVehiculeComponent } from './details-vehicule/details-vehicule.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListVehiculeComponent
    DetailsVehiculeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
