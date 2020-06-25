import { Brand } from './brand.model';
import { EventEmitter } from '@angular/core';

export class BrandsService {
    brandsAdded = new EventEmitter<Brand[]>();
    private existingBrands: Brand[] = [
        {
            brandName: 'Tata',
            location: 'Hyderabad'
        },
        {
            brandName: 'Maruthi',
            location: 'Bangalore'
        }
    ];


    onBrandSelected = new EventEmitter<Brand>();
    getBrands() {
            return this.existingBrands.slice();
        }
    OnAddBrand(newBrandName: string, NewBrandLocation: string) {
        this.existingBrands.push({ brandName: newBrandName, location: NewBrandLocation });
        this.brandsAdded.emit(this.existingBrands.slice());
    }
    

}