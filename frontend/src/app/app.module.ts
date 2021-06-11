import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { ListVehiculeComponent } from './list-vehicule/list-vehicule.component';
import { DetailsVehiculeComponent } from './details-vehicule/details-vehicule.component';
import { ContactComponent } from './contact/contact.component';

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    AdminComponent,
    ListVehiculeComponent,
    DetailsVehiculeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
