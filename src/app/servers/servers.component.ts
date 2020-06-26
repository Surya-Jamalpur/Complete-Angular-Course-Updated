import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  constructor(private router:Router, private route:ActivatedRoute) {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
    
  }
  onDynamicNav() {
    //after some func
    this.router.navigate(['myPractices'], {relativeTo:this.route});
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
