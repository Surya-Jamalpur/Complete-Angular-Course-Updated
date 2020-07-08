import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
currentRecipe:Recipe;
id:number;
  constructor(private recipeService:RecipeService, private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.params
    .subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.currentRecipe = this.recipeService.getRecipe(this.id);
      }
    )
  }
  addIngredientsToSAhoppingList() {
    this.recipeService.onaddIngredientsToSAhoppingList(this.currentRecipe.ingredients)
  }

}
