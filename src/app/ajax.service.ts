import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import listaAPIS from '../key'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {
  lista=null;
  constructor(public http:HttpClient) {
  }

  obtenerNoticias(categoria): Observable<any>{
    return this.http.get("https://newsapi.org/v2/top-headlines?country=fr&apiKey="+listaAPIS[1]+"&category="+categoria+"&page=1&pageSize=10"); 
  }
  

  obtenerTiempoUbicacionActual(lat1,lon1): Observable<any>{
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat1+'&lon='+lon1+'&units=metric&appid='+listaAPIS[0]+'');
  }

   obtener5diasTiempoUbicacionActual(lat1,lon1): Observable<any>{

       return this.http.get('https://api.openweathermap.org/data/2.5/forecast?lat='+lat1+'&lon='+lon1+'&units=metric&appid='+listaAPIS[0]+''); 

   }

   obtener5diasTiempoCiudad(ciudad): Observable<any>{

       return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q='+ciudad+'&units=metric&appid='+listaAPIS[0]+'')

   }

   obtenerTiempoCiudad(ciudad): Observable<any>{

    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+ciudad+'&units=metric&appid='+listaAPIS[0]+'')

     
   }


}
