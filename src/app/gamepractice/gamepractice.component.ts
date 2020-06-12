import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamepractice',
  templateUrl: './gamepractice.component.html',
  styleUrls: ['./gamepractice.component.scss']
})
export class GamepracticeComponent implements OnInit {
oddgpnums: number[] = [];
evengpnums: number[] = [];
  constructor() { }

  ngOnInit() {
  }
  whengamestarted(eveData) {
    if(eveData % 2 === 0) {
      this.evengpnums.push(eveData);
    } else {
      this.oddgpnums.push(eveData);
    }
    console.log(eveData);
  }
}
