import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListInterface } from '../store/ListInterface';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string='http://localhost:3000/users';
  public index = new Subject();
  constructor(private http:HttpClient) { 

  }
  getAllList(){
    return this.http.get(this.baseUrl)
  }
  getSingleList(id:number|string){
    return this.http.get(this.baseUrl+'/'+id)
  }
  editList(id:string|number,obj:ListInterface){
    return this.http.put(this.baseUrl+'/'+id,obj)
  }
  deleteList(id:number){
    return this.http.delete(this.baseUrl+'/'+id)
  }
  addList(obj:ListInterface){
    return this.http.post(this.baseUrl,obj)
  }
}
