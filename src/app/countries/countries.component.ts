import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Globals } from '../models/global.model';
import { HelperService } from '../helper.service';

@Component({
  selector: 'countries-list',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  allCountries = [];
  regionCountries = [];
  regionId;
  constructor(private countriesService: CountriesService, private route: ActivatedRoute, private helper: HelperService, public globals: Globals) { }

  ngOnInit() {
    this.getAllCountries()
    this.regionId = this.route.params['value'].regionId;
    this.globals.setRegionSelected(this.regionId);
  }
  getAllCountries() {
    this.countriesService.getAllCountries(false).subscribe((data: any) => {
      this.allCountries = data;
      this.getRegionCountries();
    });
  }

  getRegionCountries() {
    var len = this.allCountries.length;
    while (len--) {
      if (this.allCountries[len].regionalBlocs[0] != undefined) {
        if (this.allCountries[len].regionalBlocs[0].acronym == this.regionId) {
          this.regionCountries.push(this.allCountries[len]);
        }
      }
    }
  }
}
