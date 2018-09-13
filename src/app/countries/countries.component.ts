import { Component, OnInit } from '@angular/core';
import { Countries } from '../shared/countries';
import { AjaxService } from '../shared/ajax.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

    filters: string;
    CountryArray: Array<Countries>;
    fCountries: Array<Countries> = new Array<Countries>();

    constructor(private ajaxService: AjaxService) { }

    ngOnInit() {
       this.ajaxService.getCountries((myArr: Array<Countries>): void => {
         this.fCountries = myArr;
       this.CountryArray = myArr; });
    }

    filterCapital() {
       this.CountryArray = this.fCountries.filter((x: Countries):
      boolean => { return x.name.toLowerCase().includes(this.filters.toLowerCase()) ||
                          x.capital.toLowerCase().includes(this.filters.toLowerCase());
     });
     }
}
