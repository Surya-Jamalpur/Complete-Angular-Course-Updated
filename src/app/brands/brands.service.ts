import { Brand } from './brand.model';
import { EventEmitter } from '@angular/core';

export class BrandsService  {
   private existingBrands: Brand[] = [
        {
            brandName:'Tata',
            location:'Hyderabad'
        },
        {
            brandName:'Maruthi',
            location:'Bangalore'
        }
    ];

getBrands(){
    return this.existingBrands.slice();
}
onBrandSelected = new EventEmitter<Brand>();
    addBrand(){

    }

}