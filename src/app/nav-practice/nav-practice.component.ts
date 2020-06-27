import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-nav-practice',
  templateUrl: './nav-practice.component.html',
  styleUrls: ['./nav-practice.component.scss']
})
export class NavPracticeComponent implements OnInit {
  username;
  id;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.username = this.route.snapshot.params['name'];
    this.id = this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (paramnames:Params) => {
        this.username = paramnames['name'];
        this.id = paramnames['id'];
      }
    )
  }

}
