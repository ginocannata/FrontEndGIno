import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  URL='https://random-erina-ginocannata.koyeb.app/hys/'
  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.URL + 'lista');
  }
  public detail(id:number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.URL + `details/${id}`);
  }
  public save(skills: Skills):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', skills);
  }
  public update(id:number, skills: Skills): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, skills);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.URL + `delete/${id}`);
  }
}
