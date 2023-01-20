import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  ingredients:Ingredient[] | any
  // =[
  // ingredients=Ingredient[]=[
  //   new Ingredient('Apple', 5),
  //   new Ingredient('Tommatoes', 10),
  // ];
 

  // =[
  // ingredients=Ingredient[]=[
  //   new Ingredient('Apple', 5),
  //   new Ingredient('Tommatoes', 10),
  // ];

  constructor(private shopingListService:ShoppingListService){

  }
  
  ngOnInit(){
    this.ingredients = this.shopingListService.getIngredients();
    this.shopingListService.ingredientsChanged
    .subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients =  ingredients
      }
    )
  }

  // onIngredientAdded(ingredient:Ingredient){
  //     this.ingredients.push(ingredient)
  // }

} 
