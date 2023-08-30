import { Component } from '@angular/core';

import { usuarios } from '../interfaces/usuario';
import { ProveedorDatosService } from '../providers/proveedor-datos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  public data: usuarios[] = [];

  public displayedColumns: string[] = ['idUsuario','Nombre','Correo','Telefono','Contrasena'];


  constructor(private dataProvider: ProveedorDatosService){}


  ngOnInit(){
    this.dataProvider.getResponse().subscribe((response)=>{
      this.data = (response as usuarios[]);
    })
  }

}
