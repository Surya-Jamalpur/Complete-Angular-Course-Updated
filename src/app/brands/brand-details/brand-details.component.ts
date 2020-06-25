import { Component, OnInit } from '@angular/core';
import { Brand } from '../brand.model';
import { BrandsService } from '../brands.service';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.scss']
})
export class BrandDetailsComponent implements OnInit {
currentBrand:Brand;
  constructor(private brandsService:BrandsService) { }

  ngOnInit() {
    this.brandsService.onBrandSelected
    .subscribe(
      (brand:Brand) => {
        this.currentBrand = brand;
      }
    )
  }

}
