import { Component,ViewChild,ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent {
  @ViewChild('nameInput') nameInputRef:ElementRef |any;
  @ViewChild('amountInput') amountInputRef:ElementRef |any;
  
  // @Output() IngredientAdded = new EventEmitter<Ingredient>()
  
  constructor(private slService:ShoppingListService){

  }

  onAdditem(){
    const ingName=this.nameInputRef.nativeElement.value;
    const ingAMount=this.amountInputRef.nativeElement.value;
    const newIngredient= new Ingredient(ingName,ingAMount)
    // const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value)
    // this.IngredientAdded.emit(newIngredient)
    this.slService.addIngredient(newIngredient)
  }
}
