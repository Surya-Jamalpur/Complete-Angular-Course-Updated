import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService, 
    private router:Router, 
    private currentRoute:ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  addRecipe() {
    this.router.navigate(['new'], {relativeTo:this.currentRoute})
  }
  // onRecipeSelected(currentRecipe: Recipe) {
  //   this.recipeWasSelected.emit(currentRecipe);
  // }
}
