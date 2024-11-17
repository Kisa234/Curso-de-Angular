import { Component } from '@angular/core';
import { Hero, Color } from '../../interfaces/hero.interface';


@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  public isUpperCase:  boolean =false;
  public sortBy?: keyof Hero;
  public heroes: Hero[]=[
    {
      name:'Superman',
      canFly:true,
      color:Color.blue
    },
    {
      name:'Batman',
      canFly:false,
      color:Color.black
    },
    {
      name:'Flash',
      canFly:false,
      color:Color.red
    },
    {
      name:'Green Lantern',
      canFly:true,
      color:Color.green
    },
    {
      name:'Shazam',
      canFly:true,
      color:Color.red
    }
  ]

  toogleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value : keyof Hero){
    this.sortBy = value;
  }

}
