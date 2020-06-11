import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('the first Recipe', 'the first desc', 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg'),
  new Recipe('the first Recipe', 'the first desc', 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg'),
  new Recipe('the first Recipe', 'the first desc', 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg'),
  new Recipe('the first Recipe', 'the first desc', 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg'),
  new Recipe('the first Recipe', 'the first desc', 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
