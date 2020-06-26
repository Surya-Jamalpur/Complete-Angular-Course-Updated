import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';
import { ShoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
ingrediants: Ingrediant[] = [];
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.ingrediants = this.slService.getIngrediants();
  }
  onIngAdded(newIng:Ingrediant){
    this.ingrediants.push(newIng);

  }
}
