import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { RedesComponent } from './redes/redes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.components';

@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent,
    ServiciosComponent,
    RedesComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
  	HeaderComponent,
  	SliderComponent,
  	ServiciosComponent,
    RedesComponent,
    ContactoComponent,
    FooterComponent
  ]
})
export class AppModule { }
