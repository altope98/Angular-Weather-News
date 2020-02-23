import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'proyectoangular';
  fondo=false;

  cambiarFondo(evento){

    if(evento){
      this.fondo=true
    }else{
      this.fondo=false
    }
    
  }

}


