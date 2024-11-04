import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';


// configuracion del locale de la app

import localeEsPe from '@angular/common/locales/es-PE'
import localeja from '@angular/common/locales/ja'
import {registerLocaleData} from '@angular/common'

registerLocaleData(localeEsPe);
registerLocaleData(localeja);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
],
  providers: [
    {
      provide:LOCALE_ID,useValue:'es-PE'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
