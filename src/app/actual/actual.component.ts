import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AjaxService } from '../ajax.service';


import {ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-actual',
  templateUrl: './actual.component.html',
  styleUrls: ['./actual.component.css']
})
export class ActualComponent implements OnInit {

  listaDatos=null;
  listaDatos5diasRAW=null;
  lat1 ;
  lon1;
  dia;
  dia2;
  listaDatos5dias=[];
  nombredia=[];
  hora;
  days = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado'
  ]
  
  constructor(public _http: HttpClient, public _ajaxservice:AjaxService, public _route: ActivatedRoute) { 
    this.datos()
    
  }

  ngOnInit(): void {
  }

  datos(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        this.lat1 = position.coords.latitude;
        this.lon1 = position.coords.longitude;
    this._ajaxservice.obtenerTiempoUbicacionActual(this.lat1, this.lon1).subscribe( 
      response=>{
        this.listaDatos=response
        console.log(this.listaDatos)
      },
      error=>{
        console.log(error)
      })

    this._ajaxservice.obtener5diasTiempoUbicacionActual(this.lat1, this.lon1).subscribe( 
        response=>{
          this.listaDatos5diasRAW=response.list
          console.log(this.listaDatos5diasRAW)
          let fecha=new Date();
          this.hora = fecha.getHours() + ":"+ fecha.getMinutes() + " - " + fecha.getDate() + "/" + fecha.getMonth()+1 + "/"+ fecha.getFullYear();
          
          this.dia=fecha.getDate();
          this.dia2=fecha.getDay();
          
          let sumador=fecha.getDay();
          for (const list of this.listaDatos5diasRAW) {
            
            let fechaaux=list.dt_txt.split(" ");
            let diasup=fechaaux[0].split("-");
            let hora=fechaaux[1].split(":");

              if(this.dia<diasup[2] && hora[0]==15){
                    this.listaDatos5dias.push(list)
                    sumador++;
                    if(sumador==7){
                      sumador=0;
                      
                    }
                    this.nombredia.push(this.days[sumador])
                    
            }
          }
          
          console.log(this.listaDatos5dias);

        },
        error=>{
          console.log(error)
        })
    
   });

  }
}



}
