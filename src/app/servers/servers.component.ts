import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  createServerStatus:string = 'No Server Created..!';
  serverName:string = 'test';
  testngif='';
  showContent:boolean = false;
  logs = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
    
  }
  onCreateServer() {
this.createServerStatus = 'Server was Created..!'
  }
  onupdate(eve: any) {
    console.log(eve.target.value);
    this.serverName = (<HTMLInputElement>eve.target).value;
  }

  toggleclicks() {
    this.showContent = !this.showContent;
    this.logs.push(this.logs.length + 1);
  }
}
