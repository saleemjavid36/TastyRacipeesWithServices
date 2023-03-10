import { Component,  Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe | any
  // @Output() recipeSelected = new EventEmitter<void>();
  
  constructor(private recipeService:RecipeService){

  }
  
  ngOnInit() {
    
  }

  onSelected(){
      // this.recipeSelected.emit();
      this.recipeService.reciipeSelected.emit(this.recipe)
  }
}
