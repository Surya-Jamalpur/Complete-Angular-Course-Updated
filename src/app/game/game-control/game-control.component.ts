import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
 @Output() startedGame = new EventEmitter<number>();
  intervel;
  incrementaldigit = 0;
  constructor() { }

  ngOnInit() {
  }
  onStartgame(){
    this.intervel = setInterval(() => {
      this.startedGame.emit(this.incrementaldigit +1);
        this.incrementaldigit++;
    },500);
  }
  onPausegame(){
    clearInterval(this.intervel);
  }
}
