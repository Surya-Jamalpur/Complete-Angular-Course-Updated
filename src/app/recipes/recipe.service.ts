import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('the first Recipe',
            'the first desc',
            'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg',
            [
                new Ingrediant('Tomato', 20),
                new Ingrediant('Meat', 2),
                new Ingrediant('Chicken', 20)
            ]
        ),
        new Recipe('the 2nd Recipe',
            'the first desc',
            'https://static.toiimg.com/photo/72023714.cms',
            [
                
                new Ingrediant('Chicken', 20),
                new Ingrediant('Tomato', 20),
                new Ingrediant('Meat', 2),
            ]
        ),
        new Recipe('the 3rd Recipe',
            'the first desc',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeMAY3Z-205kWN7XF5u2F8GdNrSs6-RvcMOw&usqp=CAU',
            [
                new Ingrediant('Tomato', 20),
                new Ingrediant('Chicken', 20)
            ]
        ),
        new Recipe('the 4th Recipe',
            'the first desc',
            'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg?w=1155&h=1528',
            [
                new Ingrediant('onian', 20),
                new Ingrediant('fish', 2),
                new Ingrediant('Chicken', 20)
            ]
        ),
        new Recipe('the 5th Recipe',
            'the first desc',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6YBWz7D15dsoTogAWrkZ4H2yS49XIWiu8AQ&usqp=CAU',
            [
                new Ingrediant('Tomato', 20),
                new Ingrediant('Meat', 2),
                new Ingrediant('Chicken', 20)
            ]
        )
      ];

    recipeSelected = new EventEmitter<Recipe>();
    constructor(private slService:ShoppingListService){}
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index:number){
        return this.recipes[index];
    }
    onaddIngredientsToSAhoppingList(ingrediants:Ingrediant[]){
        this.slService.onAddIngredientsfromRecipe(ingrediants);
    }
}