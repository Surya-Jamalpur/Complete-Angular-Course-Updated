import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, OnChanges {
  @Input() employee:{empName:string, empID:number, empEmail:string, empPhone:number}

  // Component Lifecyckle Hooks
  constructor( private route:ActivatedRoute) { 
    console.log('constructor called..');
  }
ngOnChanges(changes: SimpleChanges) {
console.log('ngOnChanges called..');
console.log(changes);
}
  ngOnInit() {
    console.log('ngOnInit called..');
    // this code is to get the info from url
  //   this.employee= {
  //     empName: this.route.snapshot.params['name'],
  //     empID: this.route.snapshot.params['id'], 
  //     empEmail: this.route.snapshot.params['email'],
  //     empPhone: this.route.snapshot.params['phone']
  // }

}
}
