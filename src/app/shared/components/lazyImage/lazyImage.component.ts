
import {  Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: `lazyImage.component.html`,
})
export class LazyImageComponent implements OnInit{

  @Input()
  public url!:string;

  @Input()
  public alt!:string;

  ngOnInit(): void {
    if (!this.url) throw new Error ('Url property is required')
  }

  public hasLoaded: boolean = false;

  onLoad(){

    setTimeout(() => {
      this.hasLoaded = true;

    }, 200);

  }

}
