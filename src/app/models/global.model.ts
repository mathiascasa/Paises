import { Injectable } from "@angular/core";

@Injectable()

export class Globals {
  regionSelected;
  countrySelected;


  constructor() {
  }
  setRegionSelected(val) {
    this.regionSelected = val;
    this.countrySelected = '';
  }

  getRegionSelected() {
    return this.regionSelected;
  }

  setCountrySelected(val) {
    this.countrySelected = val.name;
    this.regionSelected = val.regionalBlocs[0].acronym;
  }

  getCountrySelected() {
    return this.countrySelected;
  }

}
