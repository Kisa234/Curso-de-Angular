import { Country } from "./country.interface";
import { Region } from "./region.type";

export interface CacheStore {
  byCapital : termCountry;
  byCountry : termCountry;
  byRegion: regionCountries;
}

export interface termCountry{
  term: string;
  countries : Country[];
}

export interface regionCountries{
  region : Region;
  countries : Country[];
}
