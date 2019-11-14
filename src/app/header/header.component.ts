import { Component, OnInit } from '@angular/core';
import { Globals } from '../models/global.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedRegion;
  selectedCountry;

  constructor(public globals: Globals) { }

  ngOnInit() {
    this.selectedRegion = this.globals.regionSelected;
    this.selectedCountry = this.globals.countrySelected;
  }

}
