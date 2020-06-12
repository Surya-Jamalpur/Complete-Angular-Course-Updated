import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
ingrediants: Ingrediant[] = [
  new Ingrediant('Apples', 10),
  new Ingrediant('Tomatoes', 4),
  new Ingrediant('Onians', 10),
  new Ingrediant('Mangos', 6)
];
  constructor() { }

  ngOnInit() {
  }
  onIngAdded(newIng:Ingrediant){
    this.ingrediants.push(newIng);

  }
}
