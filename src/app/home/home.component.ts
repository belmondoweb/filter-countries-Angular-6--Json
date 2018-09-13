import { Component, OnInit } from '@angular/core';
import { Countries } from '../shared/countries';
import { AjaxService } from '../shared/ajax.service';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .list-group-item:first-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top: 0;
      }
    `
  ]
})
export class HomeComponent implements OnInit {
    countries: Array<Countries>;
    fCountries: Array<Countries> = new Array<Countries>();
    query: string;
    country: object;
    currentCountry: object;
    searchTerm: string;

    showCountry(item) {
      this.searchTerm = item.name;
      item.highlight = !item.highlight;
      this.currentCountry = item;
    }
    constructor( private http: HttpClient, private service: AjaxService ) {
      this.searchTerm = '';
    }

    ngOnInit(): void {
      this.service.getCountries((myArr: Array<Countries>): void => {
      this.fCountries = myArr;
      this.countries = myArr; });

    }
}
