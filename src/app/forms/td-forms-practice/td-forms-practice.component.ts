import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-forms-practice',
  templateUrl: './td-forms-practice.component.html',
  styleUrls: ['./td-forms-practice.component.scss']
})
export class TdFormsPracticeComponent implements OnInit {
isName:boolean = false;
isPhone:boolean = false;
isEmail:boolean = false;
isAddr1:boolean = false;
isAddr2:boolean = false;
isPin:boolean = false;

  @ViewChild('userInfo', {static:true}) userForm:NgForm;

  states = ['Telangana', 'Andhra Pradesh', 'Karnataka', 'Maharastra'];
  defaultState = 'Andhra Pradesh';
  constructor() { }
  newUser = {
    uname:'',
    phone: null,
    email:'',
    state:'',
    addrInfo: {
      address1:'',
      address2:'',
      pincode:null,
    }
  }
  ngOnInit() {
  }
  getFormData(){
    console.log(this.userForm);
    this.newUser.uname =  this.userForm.value.uname;
    this.newUser.phone =  this.userForm.value.phone;
    this.newUser.email =  this.userForm.value.email;
    this.newUser.state =  this.userForm.value.state;
    this.newUser.addrInfo.address1 =  this.userForm.value.addrInfo.address1;
    this.newUser.addrInfo.address2 =  this.userForm.value.addrInfo.address2;
    this.newUser.addrInfo.pincode =  this.userForm.value.addrInfo.pincode;
    
    // this.userForm.reset();
  }
}
