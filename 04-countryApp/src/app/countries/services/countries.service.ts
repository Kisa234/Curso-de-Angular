import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { ByCapitalPageComponent } from '../pages/by-capital-page/by-capital-page.component';
import { CacheStore, regionCountries } from '../interfaces/cacheStore.interface';
import { Region } from '../interfaces/region.type';
import { JsonPipe } from '@angular/common';


@Injectable({providedIn: 'root'})
export class CountriesService {
  private apiUrl:string = "https://restcountries.com/v3.1"

  public cacheStore:CacheStore = {
    byCapital: { term: '', countries: []},
    byCountry: { term: '', countries: []},
    byRegion: { region: '', countries: []}
  }

  constructor(
    private http:HttpClient,

  ) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(){
    localStorage.setItem('cacheStore',JSON.stringify(this.cacheStore))
  }

  private loadFromLocalStorage(){
    if (!localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')! );
  }

  searchCountryByAlphaCode(code:string):Observable<Country | null>{
    const url : string = `${this.apiUrl}/alpha/${code}`;

    return this.http.get<Country[]>(url)
    .pipe(
      map( countries => countries.length > 0 ? countries[0]: null),
      catchError( () => of(null))
    );
  }

  private getCountriesRequest(url:string): Observable<Country[]>{
    return this.http.get<Country[]>(url)
    .pipe(
      catchError( error => of([]))
    );
  }

  searchCapital(term: string): Observable<Country[]>{
    const url : string = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap( countries => this.cacheStore.byCapital = { term, countries}),
      tap( () => this.saveToLocalStorage())
    );
  }

  searchByCountry(term:string): Observable<Country[]>{
    const url : string = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap( countries => this.cacheStore.byCountry = { term, countries}),
      tap( () => this.saveToLocalStorage())
    );
  }

  searchByRegion(region:Region): Observable<Country[]>{
    const url : string = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url).pipe(
      tap( countries => this.cacheStore.byRegion = { region, countries}),
      tap( () => this.saveToLocalStorage())
    );
  }


}
