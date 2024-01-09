import { Component } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.scss'
})
export class AddemployeeComponent {
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
}