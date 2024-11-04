
import {  FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';


@NgModule({
  exports:[
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule
  ]
})
export class PrimeNgModule { }
