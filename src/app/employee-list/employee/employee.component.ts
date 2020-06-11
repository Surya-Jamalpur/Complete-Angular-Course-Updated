import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, OnChanges {
  @Input() employee:{empName:string, empID:number, empEmail:string, empPhone:number}

  // Component Lifecyckle Hooks
  constructor() { 
    console.log('constructor called..');
  }
ngOnChanges(changes: SimpleChanges) {
console.log('ngOnChanges called..');
console.log(changes);
}
  ngOnInit() {
    console.log('ngOnInit called..');
  }

}
