import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  condicion=false;

  @Output()
  evento = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  cambiarFondo(){
    if(this.condicion){
      this.condicion=false;
    }else{
      this.condicion=true
    }
    this.evento.emit(this.condicion);
    
  }



}
