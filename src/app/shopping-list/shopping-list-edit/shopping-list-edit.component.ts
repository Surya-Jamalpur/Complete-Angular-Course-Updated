import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingrediant } from 'src/app/shared/ingrediant.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
@ViewChild('ingredientName',{static:true}) ingredientNameRef:ElementRef;
@ViewChild('ingredientAmount',{static:true}) ingredientAmountRef:ElementRef;
@Output() ingerdientAdded = new EventEmitter<Ingrediant>();
  constructor() { }

  ngOnInit() {
  }
  addtocart() {
    const ingName = this.ingredientNameRef.nativeElement.value;
    const ingAmount = this.ingredientAmountRef.nativeElement.value;
    const newIngredient = new Ingrediant(ingName, ingAmount);
    this.ingerdientAdded.emit(newIngredient);
  }
}
