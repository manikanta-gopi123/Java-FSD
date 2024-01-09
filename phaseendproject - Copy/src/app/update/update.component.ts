import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';


import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit  {
  employees: any[]=[];
id=""
firstname=""
lastname=""
email=""
constructor(private employeeservice:EmployeeserviceService,private route:ActivatedRoute,private router:Router) { }
ngOnInit(): void {
  this.route.paramMap.subscribe(params=>{
    const idParam=params.get('id');
    this.id+=idParam;
  })

}
updateemployee(firstname:string,lastname:string,email:string){
firstname=firstname.trim();
lastname=lastname.trim();
email=email.trim();
const employee={firstname,lastname,email};
this.employeeservice.updateemployee(this.id,employee).subscribe(newemployee=>{this.employees.push(employee)});
this.router.navigate(['/employees'])

}



}
