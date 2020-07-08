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
        x++;
      },1000);
    });
    // creating custom Observable ends
    // Subscribing the observable
    
    this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    });
    // NOTE: subscribe(() => {}) and subscribe(data => {}) both gives the same output
  };
ngOnDestroy(): void{
  // we have to unsubscribe custom observable subscription manually like below
  this.firstObsSubscription.unsubscribe();
}
}
