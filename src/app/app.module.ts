import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountUpModule } from 'countup.js-angular2';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { Globals } from './models/global.model';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { RegionComponent } from './region/region.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountriesComponent,
    CountryComponent,
    RegionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CountUpModule,
    ToastrModule.forRoot()
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
