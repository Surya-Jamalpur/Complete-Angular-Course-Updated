import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
currentRecipe:Recipe;
id:number;
  constructor(private recipeService:RecipeService, 
    private currentRoute:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    this.currentRoute.params
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
  editRecipe(){
    this.router.navigate(['edit'], {relativeTo:this.currentRoute});
    // even this works as same but with some complex path
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo:this.currentRoute});
  }
}
