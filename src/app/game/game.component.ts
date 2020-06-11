import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
oddNumbers:number[] = [];
evenNumbers:number[] = [];
  constructor() { }

  ngOnInit() {
  }
  startgametriggered(num) {
    if(num % 2 === 0) {
      this.evenNumbers.push(num);
    } else {
      this.oddNumbers.push(num);
    }
    console.log(num);
  }
}
