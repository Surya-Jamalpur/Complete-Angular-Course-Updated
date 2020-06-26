import { Component, OnInit } from '@angular/core';
import { OLSService } from './ols.service';
@Component({
  selector: 'app-online-services',
  templateUrl: './online-services.component.html',
  styleUrls: ['./online-services.component.scss'],
  providers:[OLSService]
})
export class OnlineServicesComponent implements OnInit {
  private onlineServices;
  constructor(private olsService:OLSService) { }

  ngOnInit() {
    this.onlineServices =  this.olsService.getOlsList();    
  }

}
