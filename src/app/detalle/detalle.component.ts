import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AjaxService } from '../ajax.service';

import {ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  dato=null;
  constructor(public _http: HttpClient, public _ajaxservice:AjaxService, public _route: ActivatedRoute) {

    this.datos();
   }

  ngOnInit(): void {
  }

  datos(){
    this._ajaxservice.obtenerNoticias(this._route.snapshot.params.categoria).subscribe( 
      response=>{
        this.dato=response.articles[this._route.snapshot.params.id]
        console.log(this.dato)

      },
      error=>{
        console.log(error)
      })
  }

}
