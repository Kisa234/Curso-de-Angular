import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {



  // i18n Select

  public name:string= "renzo"
  public gender: 'male'| 'female' = 'male';
  public invitationMap = {
    'male':'invitarlo',
    'female': 'invitarla'
  }

  changeCliente() {
    this.name='sandra';
    this.gender = 'female'
  };


  // i18n Plural
  public clientsMap= {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente eperando',
    'other': 'tenemos # clientes eperando'
  };

  public clients: string[] = [
    "Carlos Pérez", "María López", "Juan García",
    "Ana Torres", "Luis Fernández", "Sofía González",
    "Pedro Martínez", "Carmen Díaz", "José Ramírez",
    "Laura Sánchez"
  ];

  deleteClient(){
    this.clients.pop();
  }

  // keyValue Pipe

  public person ={
    name: 'Renzo',
    age:20,
    address:'Lima,Peru'
  }

  // Async Pipe

  public myObservableTimer = interval(2000);

  public promiseValue: Promise<string> = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
    }, 3500);
  })
}
