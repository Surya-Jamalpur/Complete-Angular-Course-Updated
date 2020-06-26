import { Component, OnInit } from '@angular/core';
import { OLSService } from './ols.service';
import { ols } from './ols.model';
@Component({
  selector: 'app-online-services',
  templateUrl: './online-services.component.html',
  styleUrls: ['./online-services.component.scss'],
  providers:[OLSService]
})
export class OnlineServicesComponent implements OnInit {
  onlineServices:ols[] = [];
  constructor(private olsService:OLSService) { }

  ngOnInit() {
    this.onlineServices = this.olsService.getOlsList();
    this.olsService.olsadded
    .subscribe(
      (ols:ols[]) => {
        this.onlineServices = ols;
      }
    )
  }

}
