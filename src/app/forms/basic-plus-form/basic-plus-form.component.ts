import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic-plus-form',
  templateUrl: './basic-plus-form.component.html',
  styleUrls: ['./basic-plus-form.component.scss']
})
export class BasicPlusFormComponent implements OnInit {
  oneway='this is a one way data binding Input..';
  twoway='this is a Two way data binding Input..';
  constructor() { }

  ngOnInit() {
  }
  onSubmit(formdata: NgForm){
    console.log(formdata);
  }

}
