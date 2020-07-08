import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit, OnDestroy {

  constructor() { }
private firstObsSubscription:Subscription;
  ngOnInit() {
    this.firstObsSubscription = interval(500).subscribe(count => {
      console.log(count);
    })
  };
ngOnDestroy(): void{
  this.firstObsSubscription.unsubscribe();
}
}
