import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Receita de bolo", "Bolo de chocolate muito gostoso", "https://thestayathomechef.com/wp-content/uploads/2016/06/The-Most-Amazing-Chocolate-Cake-Square-1.jpg"),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
