import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gpcontrol',
  templateUrl: './gpcontrol.component.html',
  styleUrls: ['./gpcontrol.component.scss']
})
export class GpcontrolComponent implements OnInit {
gameinterveller;
gamecounter = 0;
@Output() startedthegame = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  startgame(){
    this.gameinterveller = setInterval(() => {
      this.startedthegame.emit(this.gamecounter + 1);
      this.gamecounter++;
    },500)
  }
  stopgame() {
    clearInterval(this.gameinterveller);
  }
}
