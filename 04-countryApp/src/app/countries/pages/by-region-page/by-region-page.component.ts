import { Component, OnInit } from '@angular/core';


import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})

export class ByRegionPageComponent  implements OnInit{
    constructor( private countriesService:CountriesService){}

    public countries: Country[]=[];
    public regions: Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
    public selectedRegion? : Region;
    public isLoading: boolean = false;

    ngOnInit(): void {
      this.countries = this.countriesService.cacheStore.byRegion.countries;
      this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
    }

    searchByRegion(region :Region):void{
      this.isLoading= true;
      this.selectedRegion = region;

      this.countriesService.searchByRegion(region).subscribe(
        countries =>{
          this.countries = countries;
          this.isLoading = false;
        }
      );
    }
}
