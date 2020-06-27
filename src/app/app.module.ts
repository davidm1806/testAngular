import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ErrorStateMatcher,
  MatButtonModule, MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatSnackBarModule,
  ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { OpenStreeMapComponent } from './open-stree-map/open-stree-map.component';
import {AppRoutingModule} from './app-routing.module';
import { GeocodingComponent } from './geocoding/geocoding.component';
import { MapPointFormComponent } from './map-point-form/map-point-form.component';
import { ResultsListComponent } from './results-list/results-list.component';
import {NgxInputSearchModule} from 'ngx-input-search';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OpenStreeMapComponent,
    GeocodingComponent,
    MapPointFormComponent,
    ResultsListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    LeafletModule,
    AppRoutingModule,
    NgxInputSearchModule,
    MatDividerModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
