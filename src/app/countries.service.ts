import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  allCountriesList: Observable<object>;
  constructor(private dataService: DataService, private helper: HelperService) { }

  getAllCountries(force) {
    if (force || this.allCountriesList === undefined) {
      this.allCountriesList = this.dataService.getAllCountries();
    }
    return this.allCountriesList;
  }

  getCountryInfo(countryId) {
    return this.dataService.getCountryInfo(countryId);
  }

}
