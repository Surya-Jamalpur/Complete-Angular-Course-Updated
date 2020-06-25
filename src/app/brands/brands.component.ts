import { Component, OnInit } from '@angular/core';
import { Brand } from './brand.model';
import { BrandsService } from './brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
  providers:[BrandsService]
})
export class BrandsComponent implements OnInit {
brands: Brand[] = [];
  constructor(private brandsService:BrandsService) { }

  ngOnInit() {
    this.brands = this.brandsService.getBrands();
    this.brandsService.brandsAdded
    .subscribe(
      (brand:Brand[]) => {
        this.brands = brand;
      }
    )
  }

}
