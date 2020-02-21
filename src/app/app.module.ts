import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { PrimerComponent } from './primer/primer.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';


import { MatSliderModule } from '@angular/material/slider';

import { HttpClientModule } from '@angular/common/http';

import { AjaxService } from './ajax.service'

import { RouterModule, Routes } from '@angular/router';
import { DestacarDirective } from './destacar.directive';
import { BorrarPipe } from './borrar.pipe';
import { ActualComponent } from './actual/actual.component';
import { DetalleComponent } from './detalle/detalle.component';

import { TiempociudadComponent } from './tiempociudad/tiempociudad.component';


const rutas: Routes=[
  {path: 'primer', component: PrimerComponent},
  {path: 'primer/:nombre', component: DetalleComponent},
  {path: 'actual', component: ActualComponent},
  {path: 'tiempociudad', component: TiempociudadComponent},
  {path: '**', component: PrimerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    CabeceraComponent,
    PieComponent,
    DestacarDirective,
    BorrarPipe,
    ActualComponent,
    DetalleComponent,
    TiempociudadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
  
    RouterModule.forRoot(rutas)
    

  ],
  providers: [AjaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
