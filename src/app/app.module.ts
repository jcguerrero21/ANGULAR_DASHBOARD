import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './components/auth/auth.module';

//fechas
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

//Interceptores
import { Interceptors } from './interceptors';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [
    Interceptors,
    { provide: LOCALE_ID, useValue: 'es' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
