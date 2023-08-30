import { Component } from '@angular/core';

import { macota } from '../interfaces/macota';
import { usuarios } from '../interfaces/usuario';
import { ProveedorDatosService } from '../providers/proveedor-datos.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  
  public data: usuarios[] = [];

  public displayedColumns: string[] = ['idUsuario','Nombre','Correo','Telefono','Contrasena'];

  public data2: macota[] = [];

  public displayedColumns2: string[] = ['idMacota','Nombre','Edad','Raza','Genero', 'idUsuario'];

  constructor(private dataProvider: ProveedorDatosService){}


  ngOnInit(){
   this.dataProvider.getResponse().subscribe((response)=>{
    this.data = (response as usuarios[]);
   })

    this.dataProvider.getResponseM().subscribe((responseM)=>{
      this.data2 = (responseM as macota[]);
    })

  }

  applyFilter(filetValue: number){
    console.log(filetValue);
    this.dataProvider.getResponseC("https://foromascotasrest-production.up.railway.app/rest/macota/findByIdU/"+filetValue.toString()+"/json").subscribe((responseM)=>{
      this.data2 = (responseM as macota[]);
    })
  }


}
