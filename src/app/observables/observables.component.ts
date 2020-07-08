import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit, OnDestroy {

  constructor() { }
private firstObsSubscription:Subscription;
  ngOnInit() {
    // this is a test driv in observables
    // this.firstObsSubscription = interval(500).subscribe(count => {
    //   console.log(count);
    // });

    // creating custom Observable 
    const customIntervalObservable = Observable.create(observer => {
      let x = 1;
      setInterval(() => {
        observer.next(x);
        if(x > 3) {
          observer.error(new Error('the x exceeds more than 3.'));
        }
        x++;
      },1000);
    });
    // creating custom Observable ends
    // Subscribing the custom observable    
    this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
    // NOTE: subscribe(() => {}) and subscribe(data => {}) both gives the same output
  };
ngOnDestroy(): void{
  // we have to unsubscribe custom observable subscription manually like below
  this.firstObsSubscription.unsubscribe();
}
}
