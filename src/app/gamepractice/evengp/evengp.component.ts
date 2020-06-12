import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-evengp',
  templateUrl: './evengp.component.html',
  styleUrls: ['./evengp.component.scss']
})
export class EvengpComponent implements OnInit {
  @Input() datanum:number;
  constructor() { }

  ngOnInit() {
  }

}
