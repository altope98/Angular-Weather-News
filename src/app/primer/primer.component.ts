import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AjaxService } from '../ajax.service';

import {ActivatedRoute, Params} from '@angular/router'


@Component({
  selector: 'app-primer',
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.css'],
})
export class PrimerComponent implements OnInit {

  @Input() titulo:string;

  @Output()
  evento = new EventEmitter<string>();
  nombre="blalbllb";
  listaDatos=null;
  categoria='general';
  constructor(public _http: HttpClient, public _ajaxservice:AjaxService, public _route: ActivatedRoute) {
    this.datos();
   }

   datos(){

     this._ajaxservice.obtenerNoticias(this.categoria).subscribe( 
      response=>{
        console.log(response)
        this.listaDatos=response.articles

      },
      error=>{
        console.log(error)
      })
    
   } 


  ngOnInit(): void {
  }
  

}
