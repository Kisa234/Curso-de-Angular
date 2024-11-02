import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';


@Injectable({providedIn: 'root'})


export class GifsService {

    public _gifsList : Gif[] = [];

    private _tagsHistory : string [] = [];

    private apiKey: string = 'L7tgDBryzjZTMVZMYpxQY9X6txpnBWw9';
    private serviceUrl :string = 'http://api.giphy.com/v1/gifs';

    constructor(private http:HttpClient){}

    public get tagHistory(){
        return [...this._tagsHistory];
    }

    public get gifsList(){
      return [...this._gifsList];
    }

    public searchTag (tag: string):void{
        if (tag.length === 0 ) return;
        this.organizeHistory(tag);

        const params = new HttpParams()
          .set('api_key',this.apiKey)
          .set('limit',"12")
          .set('q',tag)


        this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
        .subscribe((resp) => {
          this._gifsList = resp.data;
        });
    }

    private saveLocalStorage():void{
      localStorage.setItem('history', JSON.stringify(this._tagsHistory));
    }

    public loadLocalStorage():void{
      if (!localStorage.getItem('history')) return;
      this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

      if (this.tagHistory.length === 0) return;
      this.searchTag(this.tagHistory[0]);
    }



    private organizeHistory(tag:string){
        tag = tag.toLowerCase();

        if ( this._tagsHistory.includes(tag)){
            this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !==tag);
        }
        this._tagsHistory.unshift(tag);
        this._tagsHistory = this._tagsHistory.splice(0,10);
        this.saveLocalStorage();
    }

}
