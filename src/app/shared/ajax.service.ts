import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Countries } from './countries';
@Injectable({
  providedIn: 'root'
})

export class AjaxService {
    cList: Countries[];
    constructor(private httpClt: HttpClient) { }

    getCountries(myfunc: (countries: Array<Countries>) => void): void {
      this.httpClt.get('https://restcountries.eu/rest/v2/all').
      subscribe(myfunc);
    }

}
