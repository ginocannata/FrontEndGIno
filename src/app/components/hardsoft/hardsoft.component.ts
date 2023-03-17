import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hardsoft',
  templateUrl: './hardsoft.component.html',
  styleUrls: ['./hardsoft.component.css']
})
export class HardsoftComponent implements OnInit {
  skill: Skills[] = [];
  constructor(private skillS: SkillService, private tokenService : TokenService) { }
  isLogged=false;

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  cargarSkills(): void{
    this.skillS.lista().subscribe(
      data =>{
        this.skill=data;
      }
    )
  }
  delete(id?:number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data =>{
          this.cargarSkills();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
