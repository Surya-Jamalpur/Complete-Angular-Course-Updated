import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { EHOSTUNREACH } from 'constants';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
@ViewChild('basic2', {static:true}) loginForm:NgForm;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(sasa: NgForm){
    console.log(sasa);
  }
  onSubmit2(){
    console.log(this.loginForm);
  }
}
