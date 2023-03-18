import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicioComponent } from './servicio/servicio.component';
import { ServicioService } from './servicio.service';



@NgModule({
  declarations: [
    AppComponent,
    ServicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServicioService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
