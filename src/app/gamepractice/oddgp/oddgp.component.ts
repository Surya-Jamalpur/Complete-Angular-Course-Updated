import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-oddgp',
  templateUrl: './oddgp.component.html',
  styleUrls: ['./oddgp.component.scss']
})
export class OddgpComponent implements OnInit {
  @Input() datanum:number;
  constructor() { }

  ngOnInit() {
  }

}
