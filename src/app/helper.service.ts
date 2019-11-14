import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  getIndexOfArr(arr, prop, lookupVal) {
    var arrLength = arr.length;
    while (arrLength--) {
      if (arr[arrLength][prop] === lookupVal) {
        return arrLength;
      }
    }
    return -1;
  }
}
