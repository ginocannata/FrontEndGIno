import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/app/service/image.service';
import { SProyectosService } from 'src/app/service/s-proyectos.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyectos: Proyectos = null;
  constructor(public Sproyectos: SProyectosService, private activatedRouter:ActivatedRoute, private router:Router, public imageService:ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.Sproyectos.detail(id).subscribe(
      data =>{
        this.proyectos = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectos.img = this.imageService.url
    this.Sproyectos.update(id, this.proyectos).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al actualizar");
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
