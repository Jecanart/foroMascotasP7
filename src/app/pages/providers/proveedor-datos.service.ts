import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProveedorDatosService {

  private URL: string = 'https://foromascotasrest-production.up.railway.app/rest/usuario/findAll/json';

  private URLM : string = 'https://foromascotasrest-production.up.railway.app/rest/macota/findAll/json';

  constructor(private http:HttpClient) { }


  getResponse(){
    return this.http.get(this.URL);
  }

  getResponseM(){
    return this.http.get(this.URLM);
  }

  getResponseC(DIR: string){
    return this.http.get(DIR);
  }
  


}
