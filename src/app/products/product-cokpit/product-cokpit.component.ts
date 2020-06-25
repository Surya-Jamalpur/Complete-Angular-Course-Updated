import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-cokpit',
  templateUrl: './product-cokpit.component.html',
  styleUrls: ['./product-cokpit.component.scss'],
  providers:[]
})
export class ProductCokpitComponent implements OnInit {

  constructor(private productsService:ProductsService) {
    this.productsService.productSelected.subscribe(
      (selectedproduct) => alert('Selected Product Name ' + selectedproduct.name + ' and price '+ selectedproduct.price)
    );
   }

  ngOnInit() {
  }
  addProduct(name:string, price:number) {
    this.productsService.onAddProduct(name, price);
  }

}
