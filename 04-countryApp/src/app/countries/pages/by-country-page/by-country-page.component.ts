import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit {
  constructor(private countriesService:CountriesService){}

  countries: Country[] =[]
  public isLoading: boolean = false;
  public initialValue :string= "";

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.initialValue = this.countriesService.cacheStore.byCountry.term;
  }

  searchByCountry(term:string):void{
    this.isLoading = true;
    this.countriesService.searchByCountry(term).subscribe(
      countries => {
        this.countries = countries;
        this.isLoading=false;
      });
  }
}