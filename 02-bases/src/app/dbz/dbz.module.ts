import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { DbzListComponent } from './components/list/dbz-list.component';
import { AddCharacterComponent } from './components/add-character/dbz-add-character.component';




@NgModule({
  declarations: [
    MainPageComponent,
    DbzListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class DbzModule { }
