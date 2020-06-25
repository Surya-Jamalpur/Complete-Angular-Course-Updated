import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
@Input() product:{name:string, price:number};
  constructor(private productService:ProductsService) { }

  ngOnInit() {
  }
  getprodetailsToUpdate(selectedProduct:{name:string, price:number}){
    this.productService.productSelected.emit(selectedProduct)
  }

}
