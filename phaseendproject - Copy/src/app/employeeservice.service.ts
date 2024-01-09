import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  private url='http://localhost:3000/employees';
  constructor(private http:HttpClient) { }
  addemployee(employee:any){
    return this.http.post(this.url,employee);
  }
  
  getemployees():Observable<any>{
    return this.http.get(this.url);
  }
  public deletebyid(id:any):Observable<any>{
    return this.http.delete("http://localhost:3000/employees/"+id);
  }
  public updateemployee(id:any,employee:any){
    return this.http.put(this.url+"/"+id,employee);
  }
  
}
