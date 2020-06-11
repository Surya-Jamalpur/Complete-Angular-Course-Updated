import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output() serverCreated = new EventEmitter<{servername:string, servercontent:string}>();
  @Output() blueprintCreated = new EventEmitter<{servername:string, servercontent:string}>();
  constructor() { }

  ngOnInit() {
  }
  onAddServer() {
    this.serverCreated.emit({
      servername:this.newServerName,
    servercontent:this.newServerContent
  });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      servername:this.newServerName,
    servercontent:this.newServerContent
  });
  }
}
