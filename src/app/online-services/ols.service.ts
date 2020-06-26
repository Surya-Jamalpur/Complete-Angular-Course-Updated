import { ols } from './ols.model';
import { EventEmitter } from '@angular/core';

export class OLSService {
    private olsList: ols[] = [
        {
            name:'OTP Service',
            cost:1000,
            duration:'6 months'
        },
        {
            name:'Food Order Service',
            cost:20000,
            duration:'6 months'
        }
    ];
    olsadded = new EventEmitter<ols[]>();
    onOlsSelected = new EventEmitter<ols>();
    getOlsList() {
        return this.olsList.slice();
    }
    
    onAddOls(newName:string, newCost:number, newDuration:string){
        this.olsList.push({name:newName, cost:newCost, duration:newDuration});
        this.olsadded.emit(this.olsList.slice());
    }
}