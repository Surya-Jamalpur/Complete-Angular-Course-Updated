import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employeeList = [
    {empName:'Raghu Ram', empID:22335566, empEmail:'reghuram@prolifics.com', empPhone:9966552233},
    {empName:'Raghu Ram', empID:22335566, empEmail:'reghuram@prolifics.com', empPhone:9966552233}
  ];
  constructor(private router:Router) { }

  ngOnInit() {
  }
  addemployee(empData:{empName:string, empID:number, empEmail:string, empPhone:number}) {
    this.employeeList.push({
      empName:empData.empName,
      empID:empData.empID,
      empEmail:empData.empEmail,
      empPhone:empData.empPhone
    });
  }
  gotoemployee(){
    this.router.navigate(['/employee']);
  }
}
