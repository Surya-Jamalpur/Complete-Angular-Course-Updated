import { Component, OnInit, Input } from '@angular/core';
import { ols } from '../ols.model';
import { OLSService } from '../ols.service';

@Component({
  selector: 'app-ols',
  templateUrl: './ols.component.html',
  styleUrls: ['./ols.component.scss']
})
export class OlsComponent implements OnInit {
@Input() olsItem:ols;
  constructor(private olsService:OLSService) { }

  ngOnInit() {
  }
  getDeatils(selectedOls:ols){
    this.olsService.onOlsSelected.emit(selectedOls);

  }
}
