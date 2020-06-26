import { Component, OnInit, Input } from '@angular/core';
import { ols } from '../ols.model';

@Component({
  selector: 'app-ols',
  templateUrl: './ols.component.html',
  styleUrls: ['./ols.component.scss']
})
export class OlsComponent implements OnInit {
@Input() olsItem:ols;
  constructor() { }

  ngOnInit() {
  }

}
