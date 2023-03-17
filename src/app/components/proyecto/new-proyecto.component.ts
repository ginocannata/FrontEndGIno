import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/app/service/image.service';
import { SProyectosService } from 'src/app/service/s-proyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP: string;
  descripcionP: string;
  img:string;
  constructor(private Sproyectos:SProyectosService, private router: Router, public imageService:ImageService, private activatedRouter:ActivatedRoute ) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const proyectos = new Proyectos(this.nombreP, this.descripcionP, this.img)
    this.Sproyectos.save(proyectos).subscribe(
      data => {
        alert("Proyecto agregado correctamente");
        this.router.navigate(['']);
      }, err=>{
        alert("Fallo al añadir proyecto");
        this.router.navigate(['']);
      }
    )
  }
  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_" +id;
    this.imageService.uploadImage($event, name);
  }
}
