import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercadeComponent } from './components/acerca-de/edit-acercade.component';
import { EditEducacionComponent } from './components/eduacion/edit-educacion.component';
import { NewEducacionComponent } from './components/eduacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditSkillComponent } from './components/hardsoft/edit-skill.component';
import { NewSkillComponent } from './components/hardsoft/new-skill.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaexp', component : NewExperienciaComponent},
  {path: 'editexp/:id', component : EditExperienciaComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path:'editedu/:id', component:EditEducacionComponent},
  {path:'nuevaskill', component: NewSkillComponent},
  {path:'edithys/:id', component: EditSkillComponent},
  {path:'editacercade/:id', component:EditAcercadeComponent},
  {path:'nuevoproye', component: NewProyectoComponent},
  {path:'editproye/:id', component:EditProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
