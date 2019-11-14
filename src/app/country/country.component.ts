import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CountriesService } from '../countries.service';
import { Globals } from '../models/global.model';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countryId;
  countrySelected;

  constructor(private route: ActivatedRoute, private countriesService: CountriesService, public globals: Globals) { }

  ngOnInit() {
    this.countryId = this.route.params['value'].countryId;
    this.getCountryInfo();
  }

  getCountryInfo() {
    this.countriesService.getCountryInfo(this.countryId).subscribe((data: any) => {
      this.countrySelected = data;
      this.globals.setCountrySelected(data);
    });

  }

}
