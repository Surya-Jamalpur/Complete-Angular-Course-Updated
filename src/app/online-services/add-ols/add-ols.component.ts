import { Component, OnInit } from '@angular/core';
import { OLSService } from '../ols.service';

@Component({
  selector: 'app-add-ols',
  templateUrl: './add-ols.component.html',
  styleUrls: ['./add-ols.component.scss']
})
export class AddOlsComponent implements OnInit {

  constructor(private olsService:OLSService) { }

  ngOnInit() {
  }
  addOls(name:string, cost:number, duration:string) {
    this.olsService.onAddOls(name, cost, duration);
  }
}
