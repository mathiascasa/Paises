import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';
import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
  { path: 'country/:countryId', component: CountryComponent },
  { path: 'region/:regionId', component: CountriesComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
