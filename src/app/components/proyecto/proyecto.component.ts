import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectos: Proyectos[]= [];

  constructor(private proyectoS:SProyectosService, private tokenService: TokenService ) { }
  isLogged=false;

  ngOnInit(): void {
    this.cargarProyes()
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  cargarProyes(): void{
    this.proyectoS.lista().subscribe(
      data =>{
        this.proyectos=data;
      }
    )
  }
  delete(id?:number){
    if(id != undefined){
      this.proyectoS.delete(id).subscribe(
        data =>{
          this.cargarProyes();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
