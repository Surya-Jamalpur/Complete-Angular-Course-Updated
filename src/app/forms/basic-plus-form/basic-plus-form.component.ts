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

  genders = ['male', 'female'];

  userdataentered = {
    uname:'',
    email:'',
    gender:'',
    oneway:'',
    twoway:'',
  };
  constructor() { }

  ngOnInit() {
  }
  onSubmit(formdata: NgForm){
    console.log(formdata);
    this.userdataentered.uname = formdata.value.userinfo.name;
    this.userdataentered.email = formdata.value.userinfo.email;
    this.userdataentered.oneway = formdata.value.oneway;
    this.userdataentered.twoway = formdata.value.twoway;
    this.userdataentered.gender = formdata.value.gender;
  }

}
