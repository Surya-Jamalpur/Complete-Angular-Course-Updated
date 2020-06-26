import { Ingrediant } from '../shared/ingrediant.model';

export class ShoppingListService {
    private ingrediants: Ingrediant[] = [
        new Ingrediant('Apples', 10),
        new Ingrediant('Tomatoes', 4),
        new Ingrediant('Onians', 10),
        new Ingrediant('Mangos', 6)
      ];

      getIngrediants(){
          return this.ingrediants.slice();
      }
      onAddIngredientsfromRecipe(ingrediants:Ingrediant[]){
          this.ingrediants.push(...ingrediants);

      }
}