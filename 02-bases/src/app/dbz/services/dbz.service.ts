import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] =[
    {
      "id": uuid(),
      "name": "Krillin",
      "power": 1000
    },
    {
      "id": uuid(),
      "name": "Goku",
      "power": 10000
    },
    {
      "id": uuid(),
      "name": "Vegeta",
      "power": 8000
    },
    {
      "id": uuid(),
      "name": "Piccolo",
      "power": 4000
    },
    {
      "id": uuid(),
      "name": "Frieza",
      "power": 12000
    },
    {
      "id": uuid(),
      "name": "Cell",
      "power": 14000
    },
    {
      "id": uuid(),
      "name": "Gohan",
      "power": 6000
    },
    {
      "id": uuid(),
      "name": "Bulma",
      "power": 300
    }
  ]

  public addCharacter(character:Character):void{
    const newCharacter : Character = { ...character,id: uuid() }
    this.characters.push(newCharacter);
  }


  // public onDeleteCharacter(index:number) :void {
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById(id:string){
    this.characters= this.characters.filter(character => character.id ! == id);
  }

}
