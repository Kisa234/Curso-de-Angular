import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { Gif } from '../../../gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {

  constructor(private gifsService :GifsService){
    gifsService.loadLocalStorage();

  }

  get tags(){
    return this.gifsService.tagHistory
  }

  public searchAgain(tag:string):void{
    return this.gifsService.searchTag(tag);
  }

}
