import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('the first Recipe', 'the first desc', 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg'),
        new Recipe('the 2nd Recipe', 'the first desc', 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg'),
        new Recipe('the 3rd Recipe', 'the first desc', 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg'),
        new Recipe('the 4th Recipe', 'the first desc', 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg'),
        new Recipe('the 5th Recipe', 'the first desc', 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg')
      ];

      recipeSelected = new EventEmitter<Recipe>();
      getRecipes() {
          return this.recipes.slice();
      }
}