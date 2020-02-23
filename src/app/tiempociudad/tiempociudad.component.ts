import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AjaxService } from '../ajax.service';


import {ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-tiempociudad',
  templateUrl: './tiempociudad.component.html',
  styleUrls: ['./tiempociudad.component.css']
})
export class TiempociudadComponent implements OnInit {
  condicion;
  ciudad='madrid';
  listaDatos=null;
  listaDatos5diasRAW=null;
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

    if(this._route.snapshot.params.condicion=="true"){
      this.condicion=true;

    }else{
      this.condicion=false;
    }

   }

  ngOnInit(): void {
  }

  datos(){
    this._ajaxservice.obtenerTiempoCiudad(this.ciudad).subscribe( 
      response=>{
        this.listaDatos=response
        console.log(this.listaDatos)
      },
      error=>{
        console.log(error)
      });

    this._ajaxservice.obtener5diasTiempoCiudad(this.ciudad).subscribe( 
        response=>{
          this.nombredia=[]
          this.listaDatos5dias=[]

          this.listaDatos5diasRAW=response.list
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
        },
        error=>{
          console.log(error)
        });
      
     
  }
}
