import { Route } from './../../../../../node_modules/animations/node_modules/@angular/router/src/config.d';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[]= []

  constructor(private router:Router){}

  ngOnInit(): void {
    this.menuItems = [
      {label:'Pipes de Angular', icon: 'pi pi-desktop',
        items:[
          {label:'Textos y Fechas',
            icon:'pi pi-align-left',
            routerLink:'/'},
          {label:'Numeros',
            icon:'pi pi-dollar',
            routerLink:'/numbers'},
          {label:'No Comunes',
            icon:'pi pi-globe',
            routerLink:'/uncommon'}

        ]
      },
      {
        label:'Pipes Personalizados', icon:'pi pi-cog',
        items:[
          {
            label:'Custom Pipes',
            icon:'pi pi-cog',
            routerLink:'/custom'
          }
        ]
      }
    ]
  }

}
