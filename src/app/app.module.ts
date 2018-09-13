import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AjaxService } from './shared/ajax.service';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { NgbModule, NgbModalModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchPipe } from './search.pipe';
import { NavbarComponent } from './navbar/navbar.component';





@NgModule({
    imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        NgbModalModule,
        NgbModule,
        NgbDropdownModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        CountriesComponent,
        SearchPipe,
        NavbarComponent
    ],
    providers: [
     AjaxService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
