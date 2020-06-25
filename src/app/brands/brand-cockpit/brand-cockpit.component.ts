import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brands.service';

@Component({
  selector: 'app-brand-cockpit',
  templateUrl: './brand-cockpit.component.html',
  styleUrls: ['./brand-cockpit.component.scss']
})
export class BrandCockpitComponent implements OnInit {
  newBrandName:string;
  newBrandLocation:string;
  constructor(private brandsService: BrandsService) { }

  ngOnInit() {
  }
  addBrand(name:string, location:string) {
    this.brandsService.OnAddBrand(name, location);
  }

}
