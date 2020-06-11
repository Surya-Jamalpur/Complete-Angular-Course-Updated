import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.scss']
})
export class AddEditEmployeeComponent implements OnInit {
  name:string = '';
  email:string = '';
  eid:number;
  ePhone:number;
  @Output() EmployeeAdded = new EventEmitter<{empName:string, empID:number, empEmail:string, empPhone:number}>();
  constructor() { }

  ngOnInit() {
  }
  onAddEmployee(){
    this.EmployeeAdded.emit({
      empName:this.name,
      empID:this.eid,
      empEmail:this.email,
      empPhone:this.ePhone
    });
  }
}
