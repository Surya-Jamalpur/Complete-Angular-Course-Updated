import { LoggingService } from '../Services/logging.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ProductsService {
    productsList:{name:string, price:number}[] = [
        {
          name:'Washing Machine',
          price:10000
        },
        {
          name:'Refrigrator',
          price:15000
        },
        {
          name:'LED TV',
          price:20000
        }
      ];
      productSelected = new EventEmitter<any>();

      constructor(private loggingService:LoggingService){}
      onAddProduct(newProductName:string, newProductPrice:number){
          this.productsList.push({name:newProductName, price:newProductPrice});
          this.loggingService.LogStatus(newProductName);
      }
      
}