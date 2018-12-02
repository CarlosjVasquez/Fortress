import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { RedesComponent } from './redes/redes.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent,
    ServiciosComponent,
    RedesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
  	HeaderComponent,
  	SliderComponent,
  	ServiciosComponent,
    RedesComponent
  ]
})
export class AppModule { }
