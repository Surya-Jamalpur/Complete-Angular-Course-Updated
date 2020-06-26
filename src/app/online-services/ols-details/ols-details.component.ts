import { Component, OnInit } from '@angular/core';
import { ols } from '../ols.model';
import { OLSService } from '../ols.service';

@Component({
  selector: 'app-ols-details',
  templateUrl: './ols-details.component.html',
  styleUrls: ['./ols-details.component.scss']
})
export class OlsDetailsComponent implements OnInit {
  currentOls:ols;
  constructor(private olsService:OLSService) { }

  ngOnInit() {
    this.olsService.onOlsSelected
    .subscribe(
      (ols:ols) => {
        this.currentOls = ols;
      }
    )
  }

}
