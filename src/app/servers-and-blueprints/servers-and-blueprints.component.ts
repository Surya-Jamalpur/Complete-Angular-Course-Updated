import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers-and-blueprints',
  templateUrl: './servers-and-blueprints.component.html',
  styleUrls: ['./servers-and-blueprints.component.scss']
})
export class ServersAndBlueprintsComponent implements OnInit {
  serverElements = [
    {type:'server', name:'Server 1', content:'This is a test server...'},
    {type:'blueprint', name:'blueprint 1', content:'This is a test blueprint...'}
  ];
  constructor() { }

  ngOnInit() {
  }
  onServerAdded (serverData:{servername:string, servercontent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.servername,
      content: serverData.servercontent
    });
  }

  onBlueprintAdded (bpData:{servername:string, servercontent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bpData.servername,
      content: bpData.servercontent
    });
  }

}
