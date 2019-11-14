import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { HelperService } from '../helper.service';
import { Globals } from '../models/global.model';
import { Router } from '@angular/router';



@Component({
  selector: 'region-list',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  allCountries = [];
  regionalBlocs = [];

  constructor(private countriesService: CountriesService, private helper: HelperService, public globals: Globals, private router: Router) { }

  ngOnInit() {
    this.getAllCountries();
    this.globals.setRegionSelected('');
    this.globals.setCountrySelected('');
  }

  getAllCountries() {
    this.countriesService.getAllCountries(false).subscribe((data: any) => {
      this.allCountries = data;
      this.setRegionalBlocs();
    });
  }

  setRegionalBlocs() {
    var len = this.allCountries.length;
    while (len--) {
      if (this.allCountries[len].regionalBlocs[0] != undefined) {
        var found = this.helper.getIndexOfArr(this.regionalBlocs, 'acronym', this.allCountries[len].regionalBlocs[0].acronym);
        if (found == -1 && this.allCountries[len].subregion != '') {
          var reg = this.allCountries[len].regionalBlocs[0];
          reg.count = 1
          this.regionalBlocs.push(reg);
        } else {
          this.regionalBlocs[found].count++;
        }
      }
    }
  }

  goToRegionCountries(regionAcronym) {
    this.router.navigateByUrl('/region/' + regionAcronym);
  }


}
