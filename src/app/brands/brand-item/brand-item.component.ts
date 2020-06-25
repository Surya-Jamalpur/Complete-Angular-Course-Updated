import { Component, OnInit, Input } from '@angular/core';
import { Brand } from '../brand.model';
import { BrandsService } from '../brands.service';

@Component({
  selector: 'app-brand-item',
  templateUrl: './brand-item.component.html',
  styleUrls: ['./brand-item.component.scss']
})
export class BrandItemComponent implements OnInit {
 @Input() brandData:Brand;
  constructor(private brandsService:BrandsService) { }

  ngOnInit() {
  }
  getBrandDetails(brandSelected){
    this.brandsService.onBrandSelected.emit(brandSelected);
  }

}
