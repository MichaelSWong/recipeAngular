import { Recipe } from "./recipe.model";
import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({ providedIn: "root" })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "Another Test Recipe",
      "This is simply another test",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
      [new Ingredient("Buns", 2), new Ingredient("Meat", 1)]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  // only gets copy of the array
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
