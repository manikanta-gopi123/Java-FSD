

import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrl: './viewdetails.component.scss'
})
export class ViewdetailsComponent implements OnInit{
  employees: any[]=[];
id=""
firstname=""
lastname=""
email=""

  constructor(private employeeservice:EmployeeserviceService) { }

  ngOnInit(): void {
    this.getEmployees();
  
  }

  addemployee(firstname:string,lastname:string,email:string){
    firstname=firstname.trim();
    lastname=lastname.trim();
    email=email.trim();
    const employee={firstname,lastname,email};
    this.employeeservice.addemployee(employee).subscribe(newEmployee=>{this.employees.push(newEmployee)})
  }

getEmployees():void{
  this.employeeservice.getemployees().subscribe(data=>{this.employees=data});
}
deleteuser(id:number){
  let response=this.employeeservice.deletebyid(id);
  response.subscribe(()=>{this.employees=this.employees.filter(employee=>employee.id!==id)});
  //response.subscribe((data:any)=>this.products=data)

}
}
