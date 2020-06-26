import { ols } from './ols.model';

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
    getOlsList() {
        this.olsList.slice();
    }
    
    onAddOls(){

    }
}