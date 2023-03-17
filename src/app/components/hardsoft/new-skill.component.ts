import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string;
  porcentaje: number;
  constructor(private skills: SkillService, private router:Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const skill = new Skills(this.nombre,this.porcentaje);
    this.skills.save(skill).subscribe(
      data => {
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, err=>{
        alert("Fallo al añadir skill");
        this.router.navigate(['']);
      }
    )
  }
}
